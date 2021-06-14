import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class InactivateUserService {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  public async execute(id: string): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError("User does not exist!");
    }

    await this.userRepository.inactivateUser(id);
  }
}

export { InactivateUserService };
