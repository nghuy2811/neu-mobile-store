import api from "./api";

const phoneService = {
  getAllPhones: () => {
    const url = "database";
    return api.get(url);
  },

  fitlerPhones: (filterData) => {
    const url = "filter";
    return api.post(url, filterData);
  },

  predictPurpose: (specs) => {
    const url = "predict_client";
    return api.post(url, specs);
  },
};

export default phoneService;
