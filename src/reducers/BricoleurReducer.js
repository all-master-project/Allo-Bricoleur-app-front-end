import React from "react";
import action from "../actions";
import BricoleurService from "../components/ADMIN/CRUD/Bricoleur/Services/BricoleurService";
import RestApi from "../components/Form/Services/RestApi";
import {
  ADD_BRICOLEUR,
  GET_BRICOLEURS,
  ADD_CLIENT,
  GET_CLIENTS,
} from "../actions/actionType";

const initClient = {
  nomcl: "",
  prenomcl: "",
  emailcl: "",
  idv: "",
};

const initMission = {
  titrem: "",
  datedm: "",
  descm: "",
  idcl: 0,
  prixpropose: 0,
  ids: "",
};

const initBricoState = {
  adresseb: "",
  anneexperienceb: 0,
  aproposb: "",
  cinb: "",
  email: "",
  idv: "",
  idsd: "",
  motpasseb: "",
  nomb: "",
  prenomb: "",
  telb: "",
  services: [],
  villes: [],
  sousservices: [],
  missions: [],
};

export default function BricoleurReducer(state = initBricoState, action) {
  switch (action.type) {
    case ADD_BRICOLEUR:
      const res = BricoleurService.createBricoleur(action.payload).then((res) =>
        this.props.history.push("/")
      );
      console.log(res);
      break;

    case GET_BRICOLEURS:
      break;

    default:
      break;
  }
}
