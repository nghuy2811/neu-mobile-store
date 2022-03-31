import { axiosClient } from "./axiosClient";

const api = "filter";

function getFilter(params = []) {
  axiosClient
    .post(api, { params })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}

export const productService = {
  getFilter,
};
