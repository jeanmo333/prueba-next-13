import { ICategory } from "./category";
import { IUser } from "./user";

export interface IProduct {
  _id?: string | number;
  title: string;
  description: string;
  discount?: number;
  images?: string[];
  tags?: string[];
  user?: IUser | null;
  rating?: number;
  total_sell?: number;
  stock: number;
  sale_price?: number;
  purchase_price?: number;
  category?: ICategory | null;
  isActive?: boolean;
}
