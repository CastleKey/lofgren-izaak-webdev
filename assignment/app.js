var app = require('../express');

require('./services/user.service.server');
require('./services/website.service.server');
require('./services/page.service.server');
require('./services/widget.service.server');

app.get('/goodbye', sayHello);

function sayHello() {
    console.log('Hello');
}

console.log("server side app");

// module.exports = function(app) {
//     require("./services/user.service.server.js")(app);
//     require("./services/website.service.server.js")(app);
//     require("./services/page.service.server.js")(app);
//     require("./services/widget.service.server.js")(app);
// };
