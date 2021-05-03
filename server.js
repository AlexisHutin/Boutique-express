const Http = require("http");
const App = require('./app');

// App.set('port', 3000);

const Server = Http.createServer(App);
Server.listen(3000);
