import axios from "axios";
import { BACK_URL } from "../../api";

export default class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: BACK_URL
    });
  }
  signup = (name, surname, email, password) => {
    return this.service
      .post("/auth/signup", { name, surname, email, password })
      .then(response => response.data);
  };
  login = (email, password) => {
    return this.service
      .post("/auth/login", { email, password })
      .then(response => response.data);
  };
}
