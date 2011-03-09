var cluster = require('cluster')

var port = process.argv.length > 2 ? parseInt(process.argv[2]) : 8001;

var server = cluster('./app')
  .set('workers',1)
  .use(cluster.logger('logs'))
  .use(cluster.pidfiles('pids'))
  .use(cluster.stats())
  .use(cluster.repl( port + 880 ))
  .listen( port );

process.title = "EMU Blog";
process.title += server.isMaster ? " (master)" : " (worker)";


