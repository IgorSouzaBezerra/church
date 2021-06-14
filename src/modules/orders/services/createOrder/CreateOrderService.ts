import { inject, injectable } from "tsyringe";

import { IProductsRepository } from "../../../products/repositories/IProductsRepository";
import { Order } from "../../infra/typeorm/entities/Order";
import { IOrdersRepository } from "../../repositories/IOrdersRepository";

@injectable()
class CreateOrderService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository,
    @inject("OrdersRepository")
    private ordersRepository: IOrdersRepository
  ) {}

  public async execute(
    note: string,
    requester_id: string,
    productsIds: string[]
  ): Promise<Order> {
    const products = await this.productsRepository.findByIds(productsIds);

    const order = await this.ordersRepository.create({
      note,
      requester_id,
      products,
    });

    return order;
  }
}

export { CreateOrderService };
