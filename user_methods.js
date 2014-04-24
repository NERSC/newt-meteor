Meteor.methods({
  get_user_profile: function(id) {
    return Meteor.users.findOne({
      _id: id
    }).profile;
  },
  get_newt_session: function(id) {
    return Meteor.users.findOne({
      _id: id
    }).newt_sessionid;
  }
});
