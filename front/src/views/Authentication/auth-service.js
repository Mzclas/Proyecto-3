import axios from "axios";

const BACK_URL = "http://localhost:5000/";

export default class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: BACK_URL
      // withCredentials: true
    });
  }
  signup = (name, surname, email, password) => {
    return this.service
      .post("/auth/signup", { name, surname, email, password })
      .then(response => response.data);
  };
  login = (email, password) => {
    console.log(email, password);
    return this.service
      .post("/auth/login", { email, password })
      .then(response => response.data);
  };
}
