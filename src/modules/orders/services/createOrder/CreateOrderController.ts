import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateOrderService } from "./CreateOrderService";

class CreateOrderController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { note, requester_id, productsId } = request.body;

    const createOrderService = container.resolve(CreateOrderService);

    const order = await createOrderService.execute(
      note,
      requester_id,
      productsId
    );

    return response.status(201).json(order);
  }
}

export { CreateOrderController };
