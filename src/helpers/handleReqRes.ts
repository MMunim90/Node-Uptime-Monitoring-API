import url from "node:url";
import { StringDecoder } from "node:string_decoder";
import type { Handler } from "../interface/handler";
import routes from "../routes";
import notFoundHandler from "../handlers/routeHandlers/notFoundHandler";

// Module scaffolding
const handler: Handler = {
  handleReqRes: (req, res): void => {
    // Get the URL and parse it
    const parsedUrl = url.parse(req.url || "/", true);
    const path = parsedUrl.pathname || "/";
    const trimmedPath = path.replace(/^\/+|\/+$/g, "");
    const method = (req.method || "GET").toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject
    };

    const decoder = new StringDecoder("utf-8");
    let realData = "";

    const chosenHandler = routes[trimmedPath]
      ? routes[trimmedPath]
      : notFoundHandler;

    chosenHandler(requestProperties, (statusCode: number, payload: object) => {
        statusCode = typeof(statusCode) === 'number' ? statusCode : 500;
        payload = typeof(payload) === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);

        // return the final response
        res.writeHead(statusCode);
        res.end(payloadString);
    });

    // Handle incoming data
    req.on("data", (buffer: Buffer) => {
      realData += decoder.write(buffer);
    });

    // Handle request completion
    req.on("end", () => {
      realData += decoder.end();

      res.end("Hello Munim");
    });
  },
};

// Export handler
export const handleReqRes = handler.handleReqRes;
