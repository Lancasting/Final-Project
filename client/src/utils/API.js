import axios from "axios";

export default {
  signup(userInfo) {
    return axios.post("/user/signup", userInfo);
  },
  checkUser() {
    return axios.get("/login");
  },
  verify(){
    return axios.get("/verify");
  },
};
