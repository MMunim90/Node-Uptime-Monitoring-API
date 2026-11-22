// uptime monitoring application
// a restful api to monitor up or down time of user defined links

// dependencies
const http = require('http');

// app object - model scaffolding
const app = {};

// configuration
app.config = {
    port: 3000
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);

    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });
}

// handle request response
app.handleReqRes = (req, res) => {
    // handle response

    res.end("hello munim");
}

// start the server
app.createServer();