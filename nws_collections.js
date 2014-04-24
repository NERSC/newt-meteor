this.ProjectClasses = new Meteor.Collection('project_classes');

this.Organizations = new Meteor.Collection('organizations');

this.Offices = new Meteor.Collection('offices');

this.Programs = new Meteor.Collection('programs');

this.ScienceCategories = new Meteor.Collection('science_categories');

this.AllocationTypes = new Meteor.Collection('allocation_types');

this.AllocationPools = new Meteor.Collection('allocation_pools');

this.Centers = new Meteor.Collection('centers');

Meteor.methods({
  pull_data: function(session_id) {
    return _.map(api_endpoints(), function(value, key) {
      var items;
      if (eval(key).find().count() === 0) {
        items = newt_call(value, session_id);
        return _.map(items, function(item) {
          return eval(key).insert(item);
        });
      }
    });
  }
});

this.api_endpoints = function() {
  return {
    ProjectClasses: "https://newt.nersc.gov/newt/account/classes",
    Organizations: "https://newt.nersc.gov/newt/account/organizations",
    Offices: "https://newt.nersc.gov/newt/account/offices",
    Programs: "https://newt.nersc.gov/newt/account/programs",
    ScienceCategories: "https://newt.nersc.gov/newt/account/scicats",
    AllocationTypes: "https://newt.nersc.gov/newt/account/alloctypes",
    AllocationPools: "https://newt.nersc.gov/newt/account/allocpools",
    Centers: "https://newt.nersc.gov/newt/account/centers"
  };
};

this.newt_call = function(url, session_id, callback) {
  var result;
  result = HTTP.call('GET', url, {
    headers: {
      cookie: "newt_sessionid=" + session_id
    }
  }, callback);
  if (result.data) {
    return result.data.items;
  } else {
    return 'undefined';
  }
};
