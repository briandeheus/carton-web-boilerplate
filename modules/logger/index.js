var winston = require('winston');
var carton  = require('carton');

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {
	'colorize':true, 
	'timestamp': true,
	'level': carton.cfg.get('logger.level')
});

module.exports = winston;
module.exports.name = 'logger';