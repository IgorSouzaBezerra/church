import { getRepository, Repository } from "typeorm";

import { ICreateOrderDTO } from "../../../dtos/CreateOrderDTO";
import { IOrdersRepository } from "../../../repositories/IOrdersRepository";
import { Order } from "../entities/Order";

class OrdersRepository implements IOrdersRepository {
  private repository: Repository<Order>;

  constructor() {
    this.repository = getRepository(Order);
  }

  public async create({
    note,
    requester_id,
    products,
  }: ICreateOrderDTO): Promise<Order> {
    const order = this.repository.create({
      note,
      requester_id,
      products,
    });

    await this.repository.save(order);

    return order;
  }
}

export { OrdersRepository };
