import type { Handler } from "../../interface/handler.js";

const notFoundHandler: Handler = (requestProperties, callback) => {
    callback(404, {
        message: 'Requested URL was not found!',
    })
};

export default notFoundHandler;