export interface IUserProps {
  id: number;
  email: string;
  name: string;
  unitId: number;
  companyId: number;
}

export interface IUserCardProps {
  user: IUserProps;
}
