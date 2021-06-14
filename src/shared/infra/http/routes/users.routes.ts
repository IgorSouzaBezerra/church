import { Router } from "express";

import { CreateUserController } from "../../../../modules/users/services/createUser/CreateUserController";
import { InactivateUserController } from "../../../../modules/users/services/inactivateUser/InactivateUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const inactivateUserController = new InactivateUserController();

userRoutes.post("/", createUserController.handle);
userRoutes.patch("/inactivate/:id", inactivateUserController.handle);

export { userRoutes };
