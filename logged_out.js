Template.loggedOut.events({
  "submit form": function(e, template) {
    var credentials;
    e.preventDefault();
    credentials = {
      username: template.find("[name=username]").value,
      password: template.find("[name=password]").value
    };
    return Meteor.loginWithNim(credentials);
  }
});
