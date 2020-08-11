import axios from "axios";

export default {
  signup(userInfo) {
    return axios.post("/user/signup", userInfo);
  },
  login(userInfo) {
    return axios.post("/user/login", userInfo);
  },
  checkUser() {
    return axios.get("/user/verify");
  },
  getAllTickets() {
    return axios.get("/tickets/all");
  },
};
