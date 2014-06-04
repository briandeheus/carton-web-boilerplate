var carton = require('carton');
var snor   = carton.snor;
var server = carton.server.methods;

server.get('/', function (req, res) {

	var view = snor.make('home/home', ['global/partials/header'], {
		title: 'Boilerplate Carton'
	});
	
	res.send(view);

});