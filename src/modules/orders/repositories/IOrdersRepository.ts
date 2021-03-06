import { ICreateOrderDTO } from "../dtos/CreateOrderDTO";
import { Order } from "../infra/typeorm/entities/Order";

export interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<Order>;
}
