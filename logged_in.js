Template.loggedIn.events({
  "click button": function() {
    return Meteor.logout();
  }
});
