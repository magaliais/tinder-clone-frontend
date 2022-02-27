import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-clone-backend.vercel.app/",
});

export default instance;