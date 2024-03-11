import IUsers from '../interfaces/IUser';
import UserModel from '../model/userModel';

export default class UserService {
  constructor(
    private userModel = new UserModel(),
  ) { }

  async createIssue(newUser: Omit<IUsers, 'id'>): Promise<{ status: string, data: IUsers | null }> {
    return await this.userModel.createIssue(newUser);
  }

  async getAllIssues(): Promise<{ status: string, data: IUsers[] | null }> {
    return await this.userModel.getAllIssues();
  }

  async getIssueById(userId: number): Promise<{ status: string, data: IUsers | null }> {
    return await this.userModel.getIssueById(userId);
  }

  async updateIssue(userId: number, userData: Partial<IUsers>): Promise<IUsers | null> {
    return await this.userModel.updateIssue(userId, userData);
  }

  async deleteIssue(userId: number): Promise<{ status: string, data: boolean }> {
    return await this.userModel.deleteIssue(userId);
  }
}