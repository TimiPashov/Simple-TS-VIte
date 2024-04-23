import { Post } from "../types/post";
import { HttpService } from "./httpService";

export class PostService extends HttpService<Post> {
  constructor(url: string) {
    super(url);
  }

  getAllPosts() {
    return this.getAll();
  }

  getUserPosts() {}

  getOnePost() {}
}
