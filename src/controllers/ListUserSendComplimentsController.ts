import { Request, Response } from "express";
import { ListSendComplimentsService } from "../services/ListSendCompimentsService";

export class ListSendComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserSendComplimentsServive = new ListSendComplimentsService();

    const compliments = await listUserSendComplimentsServive.execute(user_id);

    return response.json(compliments);
  }
}
