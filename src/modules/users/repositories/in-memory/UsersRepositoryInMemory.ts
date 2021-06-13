import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../infra/typeorm/entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  private users: User[] = [];

  public async create({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = new User();
    Object.assign(user, { name, email, password });

    this.users.push(user);

    return user;
  }

  public async findByEmail(email: string): Promise<User> {
    const user = this.users.find((u) => u.email === email);
    return user;
  }
}

export { UsersRepositoryInMemory };
