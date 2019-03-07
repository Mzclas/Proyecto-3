import axios from "axios";
import { BACK_URL } from "../../api";

export default class OrdersService {
  constructor() {
    this.service = axios.create({
      baseURL: BACK_URL
      // withCredentials: true
    });
  }
  create = ({ trayType, plantType, orderDate, deliveryDate }) => {
    return this.service
      .post("/orders", { trayType, plantType, orderDate, deliveryDate })
      .then(response => response.data);
  };
  get = () => {
    return this.service.get("/orders").then(response => response.data);
  };
}
