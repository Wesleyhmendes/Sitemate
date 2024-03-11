import { Request, Response } from 'express';
import UserService from '../service/user.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UserController {
  constructor(
    private userService: UserService,
  ) { }

  public async getInfo(req: Request, res: Response): Promise<Response> {
    try {
      const { data, status } = await this.userService.getInfo();
      const httpStatus = mapStatusHTTP(status);
      return res.status(httpStatus).json(data);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public async createIssue(req: Request, res: Response): Promise<Response> {
    try {
      const issue = req.body;
      const createdIssue = await this.userService.createIssue(issue);
      return res.status(201).json(createdIssue);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public async getAllIssues(req: Request, res: Response): Promise<Response> {
    try {
      const issues = await this.userService.getAllIssues();
      return res.status(200).json(issues);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public async getIssueById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const issue = await this.userService.getIssueById(id);
      if (!issue) {
        return res.status(404).json({ message: 'Issue not found' });
      }
      return res.status(200).json(issue);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public async updateIssue(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const updatedIssue = await this.userService.updateIssue(id, req.body);
      if (!updatedIssue) {
        return res.status(404).json({ message: 'Issue not found' });
      }
      return res.status(200).json(updatedIssue);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public async deleteIssue(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const deletedIssue = await this.userService.deleteIssue(id);
      if (!deletedIssue) {
        return res.status(404).json({ message: 'Issue not found' });
      }
      return res.status(200).json({ message: 'Issue deleted successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}