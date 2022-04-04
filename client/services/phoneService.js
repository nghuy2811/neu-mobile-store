import api from "./api";

const phoneService = {
  getAllPhones: () => {
    const url = "database";
    return api.get(url);
  },

  getAllBrands: () => {
    const url = "database/brands";
    return api.get(url);
  },

  getPhonesByBrand: (brandName) => {
    const url = `database/${brandName}`;
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
