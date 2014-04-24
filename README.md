newt-meteor
===========

Newt based authentication and that works with Meteor accounts login. 

Add the package to your project with:

    mrt add newt
  
Use it just like `accounts-ui` package by putting the following in your navbar:

    {{> newtAccountButtons }}
  
If you need to make a NEWT api call, do the follwing:
  
    var response = newt_call(newt_endpoint_url, newt_session_id);
  
NEWT session id can be obtained by:
  
    var newt_session_id = Meteor.call('get_newt_session', Meteor.userId());
  
Available NEWT api endpoints can be found at [NEWT documentation page](https://newt.nersc.gov/api/)

Consider contributing to this package, because science. 




