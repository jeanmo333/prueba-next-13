import { IOrder } from "./order";

export interface IDashboard {
  fiveRecentOrders: IOrder[];
  productsWithNoInventory: number;
  productsWithLowInventory: number;
  totalDailyProfit: number;
  totalDailySale: number;
  totalMontlyProfit: number;
  totalMontlySale: number;
}
