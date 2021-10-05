import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UserRepositories);

    const user = await usersRepositories.findOne({
      email,
    });

    // if email not exists
    if (!user) {
      throw new Error("Email or password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    // if password match
    if (!passwordMatch) {
      throw new Error("Email or password incorrect");
    }

    // create token
    const token = sign(
      {
        email: user.email,
      },
      "fe35558d8412be57efd750d667d292ce",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}
