import axios from "axios";
// this will overrride global axios so if we want to use for some component it can be used
// .create() this will create a copy of axios
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKENFROM INSTANCE";

//instance.interceptors.request.use..

export default instance;
