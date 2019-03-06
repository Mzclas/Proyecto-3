import axios from "axios";

const BACK_URL = "http://localhost:5000/";

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
}
