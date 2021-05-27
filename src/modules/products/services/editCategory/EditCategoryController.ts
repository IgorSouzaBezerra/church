import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditCategoryService } from "./EditCategoryService";

class EditCategoryController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description } = request.body;

    const editCategoryService = container.resolve(EditCategoryService);

    const categoryEdited = await editCategoryService.execute({
      id,
      name,
      description,
    });

    return response.json(categoryEdited);
  }
}

export { EditCategoryController };
