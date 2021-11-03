import * as actionType from "./actionType";

export const GET_BRICOLEURS = () => async (dispatch) => {
  dispatch({ type: actionType.GET_BRICOLEURS, payload: {} });
};

export const ADD_BRICOLEUR = (Bricoleur) => async (dispatch) => {
  dispatch({ type: actionType.ADD_BRICOLEUR, payload: { Bricoleur } });
};

export const GET_BRICOLEURS_BY_VILLE_BY_SERVICE =
  (idb, idv) => async (dispatch) => {
    dispatch({
      type: actionType.GET_BRICOLEURS_BY_VILLE_BY_SERVICE,
      payload: {},
    });
  };

export const ADD_CLIENT = (Client_Mission) => async (dispatch) => {
  dispatch({ type: actionType.ADD_CLIENT, payload: { Client_Mission } });
};

export const GET_CLIENTS = (Client) => async (dispatch) => {
  dispatch({ type: actionType.GET_CLIENTS, payload: { Client } });
};
export const ADD_MISSION = (Mission) => async (dispatch) => {
  dispatch({ type: actionType.ADD_MISSION, payload: Mission });
};
export const GET_MISSIONS = (Mission) => async (dispatch) => {
  dispatch({ type: actionType.GET_MISSIONS, payload: Mission });
};
export const GET_MISSIONS_BY_VILLES_BY_SERVICE =
  (Mission) => async (dispatch) => {
    dispatch({
      type: actionType.GET_MISSIONS_BY_VILLES_BY_SERVICE,
      payload: Mission,
    });
  };
