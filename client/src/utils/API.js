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
  getAllTickets(query) {
    console.log(query);
    return axios.get(query ? `/search/${query}` : "/search");
  },
  findOne(id) {
    return axios.get(`/tickets/${id}`);
  },
};
