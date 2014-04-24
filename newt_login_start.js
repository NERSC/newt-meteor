Meteor.loginWithNim = function(credentials, callback) {
  return Accounts.callLoginMethod({
    methodArguments: [credentials],
    userCallback: function(result) {
      return console.log("");
    }
  });
};
