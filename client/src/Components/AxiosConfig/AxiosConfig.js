import axios from "axios";

const instance = axios.create({
  baseURL: "https://ancient-meadow-65608.herokuapp.com",
});

export default instance;
