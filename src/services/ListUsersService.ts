import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { classToPlain } from "class-transformer";

export class ListUsersService {
  async execute() {
    const userRepositories = getCustomRepository(UserRepositories);

    const users = await userRepositories.find();

    return classToPlain(users);
  }
}
