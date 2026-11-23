import type { Handler } from "../../interface/handler.js";

const sampleHandler: Handler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, {
        message: 'This is a sample url',
    });
};

export default sampleHandler;