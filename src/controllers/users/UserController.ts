import { Request, Response } from 'express';
import UserModel from '../models/UserModel';

class UserController extends UserModel {
    public req: Request;
    public res: Response;

    constructor(req: Request, res: Response) {
        super();
        this.req = req;
        this.res = res;
    }
    /**
     * index route
     */
    public index() {
        this.getUserDocument('jp')
            .then(doc => {
                console.log(doc);
                this.res.status(200).json(doc);
            })
            .catch(error => this.res.json(error));
    }
}

export default UserController;
