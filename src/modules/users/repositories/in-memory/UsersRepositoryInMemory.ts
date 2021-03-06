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

  public async findById(id: string): Promise<User> {
    const user = this.users.find((u) => u.id === id);

    return user;
  }

  public async inactivateUser(id: string): Promise<void> {
    const user = await this.findById(id);
    user.active = false;
  }
}

export { UsersRepositoryInMemory };
