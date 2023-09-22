import { IOrder } from "./order";

export interface IDetails {
  _id: string;
  productTitle?: string;
  subtotal: number;
  order?: IOrder;
  imageProduct?: string;
  quantity: number;
  stock: number;
}
