import { User } from "../types/user";
import { HttpService } from "./httpService";

export class UserService extends HttpService<User> {
  constructor(url: string) {
    super(url);
  }

  getAllUsers() {
    return this.getAll()
  }

  getOneUser() {}
}
