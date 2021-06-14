import { AppError } from "../../../../shared/errors/AppError";
import BCryptHashProvider from "../../providers/HashProvider/implementations/BCryptHashProvider";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserService } from "../createUser/CreateUserService";
import { InactivateUserService } from "./InactivateUserService";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let hashProvider: BCryptHashProvider;
let createUserService: CreateUserService;
let inactivateUserService: InactivateUserService;

describe("Inactivate User", () => {
  beforeAll(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    hashProvider = new BCryptHashProvider();
    createUserService = new CreateUserService(
      usersRepositoryInMemory,
      hashProvider
    );
    inactivateUserService = new InactivateUserService(usersRepositoryInMemory);
  });

  it("should be able to inactivate user", async () => {
    const user = await createUserService.execute({
      name: "Edward Patterson",
      password: "123",
      email: "ecligope@na.si",
    });

    await inactivateUserService.execute(user.id);

    expect(user.active).toEqual(false);
  });

  it("should not be able to inactivate user", () => {
    expect(async () => {
      await inactivateUserService.execute("fake");
    }).rejects.toEqual(new AppError("User does not exist!"));
  });
});
