export interface ICartOrWishlist {
  _id?: string | number;
  title: string;
  discount?: number;
  sale_price: number;
  quantity: number;
  image: string;
}
