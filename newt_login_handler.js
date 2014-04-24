Accounts.registerLoginHandler(function(credentials) {
  var organization, result, user, user_id, user_info;
  if (!(credentials.username && credentials.password)) {
    return 'undefined';
  }
  result = HTTP.call('POST', "https://newt.nersc.gov/newt/login/", {
    params: {
      username: credentials.username,
      password: credentials.password
    }
  });
  if (!(result.statusCode === 200 && result.data.auth === true)) {
    return 'undefined';
  }
  Meteor.call('pull_data', result.data.newt_sessionid, function(error, result) {
    if (error) {
      return console.log("____an error happend and the reason is " + error.reason);
    }
  });
  user_id = null;
  user = Meteor.users.findOne({
    username: result.data.username
  });
  if (!user) {
    user_id = Meteor.users.insert({
      username: result.data.username
    });
  } else {
    user_id = user._id;
  }
  user_info = newt_call("https://newt.nersc.gov/newt/account/user/" + result.data.username + "/persons", result.data.newt_sessionid);
  Meteor.users.update(user_id, {
    $set: {
      profile: user_info[0],
      newt_sessionid: result.data.newt_sessionid
    }
  });
  organization = Organizations.findOne({
    org_id: user_info[0].org_id
  });
  Meteor.users.update(user_id, {
    $set: {
      'profile.organization_name': organization != null ? organization.description : void 0
    }
  });
  return {
    userId: user_id
  };
});
