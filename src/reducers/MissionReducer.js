import React from "react";
import action from "../actions";
import BricoleurService from "../components/ADMIN/CRUD/Bricoleur/Services/BricoleurService";
import RestApi from "../components/Form/Services/RestApi";
import {
  ADD_MISSION,
  GET_MISSIONS,
  GET_BRICOLEURS_BY_VILLE_BY_SERVICE,
  GET_MISSIONS_BY_VILLES_BY_SERVICE,
} from "../actions/actionType";

const initMission = {
  titrem: "",
  datedm: "",
  descm: "",
  idcl: 0,
  prixpropose: 0,
  ids: "",
};

export default function MissionReducer(state = initMission, action) {
  switch (action.type) {
    case ADD_MISSION:
      break;
    case GET_MISSIONS:
      break;
    case GET_BRICOLEURS_BY_VILLE_BY_SERVICE:
      break;
    case GET_MISSIONS_BY_VILLES_BY_SERVICE:
      break;
    default:
      break;
  }
}
