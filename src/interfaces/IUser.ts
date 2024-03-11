export default interface IUsers {
  id: number,
  title: string,
  description: string,
}

export interface IUsersModel {
  findAllIssues(): Promise<{ status: string, data: IUsers[] | null }>
}
