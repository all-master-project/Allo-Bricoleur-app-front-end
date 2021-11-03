import axios from "axios";

const BRICOLEUR_API_BASE_URL = "http://localhost:8181/bricoleurs";
const API_BASE_URL = "http://localhost:8181";

const config = {
  headers: {
    "content-type": "application/json;multipart/form-data;charset=UTF-8",
    Accept: "application/json",
    "Access-Control-Allow-Methods": "GET; POST; PUT; DELETE",
    "Access-Control-Allow-Origin": "*",
  },
};

class BricoleurService {
  get(path) {
    return axios.get(API_BASE_URL + path, config);
  }

  save(path, data) {
    return axios.post(API_BASE_URL + path, JSON.stringify(data), config);
  }
  delete(path, data) {
    return axios.delete(API_BASE_URL + path, JSON.stringify(data), config);
  }
  update(path, data) {
    return axios.put(API_BASE_URL + path, JSON.stringify(data), config);
  }
  getBricoleurs() {
    return axios.get(BRICOLEUR_API_BASE_URL + "/getbricoleurs");
  }

  createBricoleur(bricoleur) {
    return axios.post(
      BRICOLEUR_API_BASE_URL + "/addBricoleur",
      JSON.stringify(bricoleur),
      config
    );
  }

  getById(path, id) {
    return axios.get(API_BASE_URL + path + id);
  }

  updateBricoleur(bricoleurId, bricoleur) {
    return axios.put(BRICOLEUR_API_BASE_URL + "/" + bricoleurId, bricoleur);
  }

  deleteBricoleur(bricoleurId) {
    return axios.delete(BRICOLEUR_API_BASE_URL + "/" + bricoleurId);
  }
}

export default new BricoleurService();
