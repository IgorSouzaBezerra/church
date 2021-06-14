import { Request, Response } from "express";
import { container } from "tsyringe";

import { InactivateUserService } from "./InactivateUserService";

class InactivateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const inactivateUserService = container.resolve(InactivateUserService);

    await inactivateUserService.execute(id);

    return response.send();
  }
}

export { InactivateUserController };
