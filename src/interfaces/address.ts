import { IUser } from "./user";

export interface IAddress {
  _id?: string;
  title: string;
  street: string;
  number: string;
  city: string;
  phone: string;
  commune: string;
  country: string;
  firstname: string;
  lastname: string;
  user?: IUser | null;
  createdAt?: string
}
