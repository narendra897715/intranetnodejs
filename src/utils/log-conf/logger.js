var log4js = require('log4js');
var path = require('path');

log4js.configure({
    appenders: {
        error: { type: 'file', filename: path.join(__dirname, './../../../log/service_errors.log'), maxLogSize: 10485760, backups: 5, compress: true },
        database: { type: 'file', filename: path.join(__dirname, './../../../log/database_errors.log'), maxLogSize: 10485760, backups: 5, compress: true },
        controller: { type: 'file', filename: path.join(__dirname, './../../../log/controller_errors.log'), maxLogSize: 10485760, backups: 5, compress: true }
    },
    categories: {
        default: { appenders: ['error'], level: 'debug' },
        database: { appenders: ['database'], level: 'debug' },
        controller: { appenders: ['controller'], level: 'debug' },
    }
});

module.exports = { log4js }