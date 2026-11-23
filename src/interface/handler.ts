
import type { IncomingMessage, ServerResponse } from 'node:http';

export interface Handler {
    handleReqRes: (
        req: IncomingMessage,
        res: ServerResponse
    ) => void;
}
