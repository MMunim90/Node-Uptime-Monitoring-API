
/**
 * Uptime Monitoring Application
 * A RESTful API to monitor the up or down time of user-defined links.
 */

// Dependencies
import http from 'node:http';
import { handleReqRes } from './helpers/handleReqRes';
import config from './config';

// App object - model scaffolding
const app = {

    // Handle request and response
    handleReqRes: handleReqRes,

    // Create server
    createServer(): void {
        const server = http.createServer(this.handleReqRes);

        server.listen(config.port, () => {
            console.log(`Listening to port ${config.port}`);
        });
    }
};

// Start the server
app.createServer();
