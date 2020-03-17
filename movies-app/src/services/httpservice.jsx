import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, error => {
  const exp =
    error.response &&
    error.response.status >= 400 &&
    error.response.status >= 500;

  if (!exp) {
    toast("Unknown error");
    //this.setState({ posts: this.orig });
  }
  //return the promise obj.with error msg.

  console.log("http");

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
