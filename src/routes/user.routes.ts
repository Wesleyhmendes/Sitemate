import { Request, Router, Response } from 'express';
import UserController from '../controller/userController';
import UserService from '../service/user.service';

const router = Router();

const userService = new UserService();
const userController = new UserController(userService);

router.get('/',(req: Request, res: Response) => userController.getInfo(req, res));

router.post('/', (req: Request, res: Response) => userController.createIssue(req, res));

router.get('/', (req: Request, res: Response) => userController.getAllIssues(req, res));

router.get('/:id', (req: Request, res: Response) => userController.getIssueById(req, res));

router.put('/:id', (req: Request, res: Response) => userController.updateIssue(req, res));

router.delete('/:id', (req: Request, res: Response) => userController.deleteIssue(req, res));

export default router;