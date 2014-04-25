Package.describe({
	summary: "Newt based authentication that works with Meteor accounts login"
});

Package.on_use(function (api, where) {
	
	api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
	api.use('accounts-password', ['client', 'server']);
	api.use('http', ['client', 'server']);

	api.add_files(["logged_in.html", "logged_in.js", "logged_out.html", "logged_out.js", "logging_in.html", "newt_account_buttons.html", "newt_account_buttons.js", "newt_login_start.js"], "client");

	api.add_files(["newt_login_handler.js", "user_methods.js"], "server");

	api.add_files("nws_collections.js", ["client", "server"]);

	if (api.export) 
		api.export("Newt");

});