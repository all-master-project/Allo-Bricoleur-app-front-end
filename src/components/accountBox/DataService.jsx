import axios from "axios";

const INSTRUCTOR = "user";
const PASSWORD = "user";
const SERVICE_API_URL = "http://localhost:8181/services/getservices";
const SOUS_SERVICE_API_URL = `http://localhost:8181/services/getSouServices`;

class DataService {
  retrieveAllCourses(name) {
    console.log("executed service");
    return axios
      .get(SERVICE_API_URL, {
        headers: {
          authorization: "Basic " + window.btoa(INSTRUCTOR + ":" + PASSWORD),
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  }
}

export default new DataService();
