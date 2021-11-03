// import React from "react";
// import action from "../actions";
// import BricoleurService from "../components/ADMIN/CRUD/Bricoleur/Services/BricoleurService";
import { Redirect } from "react-router";
import RestApi from "../components/Form/Services/RestApi";
// import { ADD_CLIENT, GET_CLIENTS } from "../actions/actionType";

const initClient = {
  nomcl: "",
  prenomcl: "",
  emailcl: "",
  idv: "",
};

export const ClientReducer = (state = initClient, action) => {
  switch (action.type) {
    case "ADD_CLIENT":
      RestApi.save("/clients/save", action.payload.Client)
        .then((res) => {
          console.log("Client: ", res.data);
          action.payload.Mission.idcl = res.data.idcl;
          console.log(action.payload.Mission);
          RestApi.save("/missions/save", action.payload.Mission);
        })
        .catch((err) => alert(err));
      // this.props.history.push("/");
      break;
    case "GET_CLIENTS":
      break;
    default:
      break;
  }
};

export default ClientReducer;
