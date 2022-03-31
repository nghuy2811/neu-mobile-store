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
};

export default phoneService;
