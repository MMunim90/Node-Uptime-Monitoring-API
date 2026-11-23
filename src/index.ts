
/**
 * Uptime Monitoring Application
 * A RESTful API to monitor the up or down time of user-defined links.
 */

// Dependencies
import http from 'node:http';
import { handleReqRes } from './helpers/handleReqRes';

// App object - model scaffolding
const app = {
    // Configuration
    config: {
        port: 3000
    },

    // Handle request and response
    handleReqRes: handleReqRes,

    // Create server
    createServer(): void {
        const server = http.createServer(this.handleReqRes);

        server.listen(this.config.port, () => {
            console.log(`Listening to port ${this.config.port}`);
        });
    }
};

// Start the server
app.createServer();
