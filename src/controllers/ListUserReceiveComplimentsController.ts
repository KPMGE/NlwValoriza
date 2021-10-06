import { Request, Response } from "express";
import { ListUserReceiveCompliments } from "../services/ListUserReceiveComplimentsService";

export class ListReceiveComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserSendComplimentsServive = new ListUserReceiveCompliments();

    const compliments = await listUserSendComplimentsServive.execute(user_id);

    return response.json(compliments);
  }
}
