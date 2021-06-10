import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProductService } from "./UpdateProductService";

class UpdateProductController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id, name, amount, category_id, active } = request.body;

    const updateProductService = container.resolve(UpdateProductService);

    const updatedProduct = await updateProductService.execute({
      id,
      name,
      amount,
      category_id,
      active,
    });

    return response.json(updatedProduct);
  }
}

export { UpdateProductController };
