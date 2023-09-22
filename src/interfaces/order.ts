import { IAddress } from "./address";
import { ICartOrWishlist } from "./cartOrWishlist";
import { IDetails } from "./details";
import { IUser } from "./user";

export interface IOrder {
  _id?: string;
  cart: ICartOrWishlist[];
  details?: IDetails[];
  token?: string | undefined;
  idAddressSelected?: string;
  total?: number;
  profit?: number;
  status?: string;
  user?: IUser | null;
  address?: IAddress;
  idPayment?: string;

  createdAt?: string;
  updatedAt?: string;
}
