import { Request, Response } from "express";

class BaseController {
    public req: Request;
    public res: Response;

    constructor (req: Request, res: Response) {
        this.req = req;
        this.res = res;
    }
}

export default BaseController;
