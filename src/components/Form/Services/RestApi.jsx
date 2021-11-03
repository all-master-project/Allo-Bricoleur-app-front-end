// import React from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:8181";

const config = {
  headers: {
    "content-type": "application/json;multipart/form-data;charset=UTF-8",
    Accept: "application/json",
    "Access-Control-Allow-Methods": "GET; POST; PUT; DELETE",
    "Access-Control-Allow-Origin": "*",
  },
};

export class RestApi {
  get(path) {
    return axios.get(API_BASE_URL + path, config);
  }

  save(path, Bricoleurs) {
    return axios.post(API_BASE_URL + path, Bricoleurs, config);
  }
  delete(path, Bricoleurs) {
    return axios.delete(
      API_BASE_URL + path,
      JSON.stringify(Bricoleurs),
      config
    );
  }
  uploadImage = async (Bricoleur) => {
    axios.post("http://localhost:8181/bricoleurs/addBrico", Bricoleur, {
      onUploadProgress: (progressEvent) => {
        console.log(
          "Uploading : " +
            ((progressEvent.loaded / progressEvent.total) * 100).toString() +
            "%"
        );
      },
    });
  };
  update(path, Bricoleurs) {
    return axios.put(API_BASE_URL + path, JSON.stringify(Bricoleurs), config);
  }
}

export default new RestApi();
