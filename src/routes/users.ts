import express, { Request, Response } from 'express';
import UserController from '../controllers/users/UserController';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    new UserController(req, res).index();
});

export default router;
