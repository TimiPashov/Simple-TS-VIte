import { CONFIG } from "./constants";
import { HttpService } from "./services/httpService";
import { PostService } from "./services/postService";
import { UserService } from "./services/userService";
import "./style.css";

const root = document.querySelector<HTMLDivElement>("#app");

const { baseUrl } = CONFIG;

const userService = new UserService(`${baseUrl}/users`);
const postService = new PostService(`${baseUrl}/posts`);

// userService.getAllUsers().then((data) => console.log(data));
// postService.getAllPosts().then((data) => console.log(data));

// const httpService = new HttpService(`${baseUrl}/users`);
// httpService.getAll().then(data=>console.log(data))

if (root) {
  root.innerHTML = `
    <div>
    <h1>Hello World!</h1>
    </div>
   `;
}
