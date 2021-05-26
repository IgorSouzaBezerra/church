import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryService } from "./CreateCategoryService";

class CreateCategoryController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const categoriesRepository = container.resolve(CreateCategoryService);

    const category = await categoriesRepository.execute({ name, description });

    return response.status(201).json(category);
  }
}

export { CreateCategoryController };
