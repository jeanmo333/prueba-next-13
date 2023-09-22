import { IProduct } from "./product";
import { IUser } from "./user";

export interface ICategory {
  _id?: string;
  name: string;
  image?: string;
  user?: IUser | null;
  product?: IProduct | null;
  image_Url?: string;
}
