import IUsers, { IUsersModel } from "../interfaces/IUser";
import UserInfos from "../database/models/UserModel";

export default class UserModel implements IUsersModel {
  private userModel = UserInfos;

  async createIssue(issueData: Omit<IUsers, 'id'>): Promise<{ status: string, data: IUsers | null }> {
    const createdIssue = await this.userModel.create(issueData);
    if (createdIssue) {
      return { status: 'SUCCESSFUL', data: createdIssue };
    } else {
      return { status: 'NOT FOUND', data: null };
    }
  }

  async getAllIssues(): Promise<{ status: string, data: IUsers[] | null }> {
    const issues = await this.userModel.findAll();
    if (issues) {
      return { status: 'SUCCESSFUL', data: issues };
    } else {
      return { status: 'NOT FOUND', data: null };
    }
  }

  async getIssueById(issueId: number): Promise<{ status: string, data: IUsers | null }> {
    const issue = await this.userModel.findByPk(issueId);
    if (issue) {
      return { status: 'SUCCESSFUL', data: issue };
    } else {
      return { status: 'NOT FOUND', data: null };
    }
  }

  async updateIssue(userId: number, userData: Partial<IUsers>): Promise<IUsers | null> {
    try {
      const user = await this.userModel.findByPk(userId);
      if (user) {
        await user.update(userData);
        return user.toJSON();
      }
    } catch (error: any) {
      console.error(error.message);
    }
    return null;
  }

  async deleteIssue(issueId: number): Promise<{ status: string, data: boolean }> {
    const deletedRows = await this.userModel.destroy({ where: { id: issueId } });
    return { status: 'SUCCESSFUL', data: true };
  }
}
