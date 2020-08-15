import axios from "axios";

export default {
  signup(userInfo) {
    return axios.post("/user/signup", userInfo);
  },
  login(userInfo) {
    return axios.post("/user/login", userInfo);
  },
  signout() {
    return axios.get("/signout");
  },
  checkUser() {
    return axios.get("/user/verify");
  },
  findUsersBy(query) {
    return axios.post("/users/search", query);
  },
  getAllTickets(ticketInfo) {
    return axios.post("/search", ticketInfo);
  },
  findOne(id) {
    return axios.get(`/tickets/${id}`);
  },
  updateOne(data) {
    console.log(data);
    return axios.put("/tickets/update", data);
  },
};
