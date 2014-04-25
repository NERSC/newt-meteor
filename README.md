newt-meteor
===========

NEWT based authentication that works with Meteor accounts login. 

NEWT is a web service that allows you to access computing resources at NERSC through a simple RESTful API. The NEWT API and web service will let you interact with NERSC through simple HTTP urls and commands. NEWT responds to client requests using JSON. This makes it very easy to build powerful web applications using nothing but HTML and Javascript. More about NEWT [here](https://newt.nersc.gov/)

Add the package to your project with:

    mrt add newt

Use it just like `accounts-ui` package by putting the following in your navbar:

    {{> newtAccountButtons }}
  
If you need to make a NEWT api call, do the following:
  
    var response = newt_call(newt_endpoint_url, newt_session_id);
  
NEWT session id can be obtained by:
  
    var newt_session_id = Meteor.call('get_newt_session', Meteor.userId());
  
Available NEWT api endpoints can be found at [NEWT documentation page](https://newt.nersc.gov/api/)





