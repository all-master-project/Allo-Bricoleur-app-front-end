import React, { Component } from "react";
import { connect } from "react-redux";
import FormRegistrationStyle from "./css/FormRegistration.css";
import RestApi from "../Form/Services/RestApi";
import axios from "axios";
import { ADD_CLIENT } from "../../actions";
import { bindActionCreators, createStore } from "redux";
import ClientReducer from "../../reducers/ClientReducer";

const style = {
  visibility: "hidden",
};

const store = createStore(ClientReducer);

export class CLientForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Client: {
        nomcl: "",
        prenomcl: "",
        emailcl: "",
        idv: "",
      },
      Mission: {
        titrem: "",
        datedm: "",
        descm: "",
        idcl: 0,
        prixpropose: 0,
        ids: "",
      },
      villes: [],
      services: [],
      toggle: false,
    };
  }
  handleClickEventHome = () => {
    this.props.history.push("/");
  };
  componentDidMount() {
    RestApi.get("/villes/getvilles")
      .then((res) => this.setState({ villes: res.data }))
      .catch((error) => console.log(error));
    RestApi.get("/services/getservices")
      .then((res) => this.setState({ services: res.data }))
      .catch((error) => console.log(error));
  }
  handlerChangeInputClient = (e) => {
    this.setState({
      Client: { ...this.state.Client, [e.target.name]: e.target.value },
    });
  };
  handlerChangeInputMission = (e) => {
    this.setState({
      Mission: { ...this.state.Mission, [e.target.name]: e.target.value },
    });
  };
  handlerSubmit = (event) => {
    event.preventDefault();
    // store.dispatch({ type: "ADD_CLIENT" });
    store.dispatch({ type: "ADD_CLIENT", payload: this.state });
  };
  render() {
    return (
      <div>
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <form onSubmit={this.handlerSubmit} encType="multipart/form-data">
          <div className="container register">
            <div className="row">
              <div className="col-md-3 register-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                <h3>Client Poste</h3>
                <p>Poster vos Bricole rapidement</p>
                <br />
              </div>
              <div className="col-md-9 register-right">
                <ul
                  className="nav nav-tabs nav-justified"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      onClick={this.handleClickEventHome}
                      className="nav-link "
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Client
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      onClick={this.handleClickEventHome}
                      className="nav-link active"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Acceuil
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <h3 className="register-heading">Client Poste</h3>
                    <div className="row register-form">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            onChange={(e) => this.handlerChangeInputClient(e)}
                            value={this.state.nomcl}
                            type="text"
                            name="nomcl"
                            className="form-control"
                            placeholder="Nom *"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={(e) => this.handlerChangeInputClient(e)}
                            type="text"
                            name="prenomcl"
                            className="form-control"
                            placeholder="Prénom *"
                            value={this.state.prenomcl}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={(e) => this.handlerChangeInputClient(e)}
                            type="text"
                            name="emailcl"
                            className="form-control"
                            placeholder="Email *"
                            value={this.state.emailcl}
                          />
                        </div>
                        <div className="form-group">
                          <select
                            onChange={(e) => this.handlerChangeInputMission(e)}
                            name="ids"
                            className="form-control"
                            defaultValue={"DEFAULT"}
                          >
                            <option className="hidden" value="DEFAULT" disabled>
                              Service
                            </option>
                            {this.state.services.map((data, index) => {
                              return (
                                <option value={data.ids} key={index}>
                                  {data.noms}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <div className="form-group">
                          <select
                            onChange={(e) => this.handlerChangeInputClient(e)}
                            name="idv"
                            className="form-control"
                            defaultValue={"DEFAULT"}
                          >
                            <option className="hidden" value="DEFAULT" disabled>
                              Ville
                            </option>
                            {this.state.villes.map((data, index) => {
                              return (
                                <option value={data.idv} key={index}>
                                  {data.nomv}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            onChange={(e) => this.handlerChangeInputMission(e)}
                            type="text"
                            name="titrem"
                            className="form-control"
                            placeholder="Titre mission *"
                            value={this.state.titrem}
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            onChange={(e) => {
                              this.handlerChangeInputMission(e);
                            }}
                            name="descm"
                            type="text"
                            rows="3"
                            cols="20"
                            className="form-control"
                            placeholder="Description du mission *"
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <input
                            onChange={(e) => this.handlerChangeInputMission(e)}
                            type="number"
                            name="prixpropose"
                            className="form-control"
                            placeholder="Prix Proposé *"
                            value={this.state.prixpropose}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-30">
                    <div className="file-field">
                      <div>
                        <input
                          type="submit"
                          value="ENREGISTRER"
                          className="btn btn-lg btn-secondary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Cleint: state.Client,
    Mission: state.Mission,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addClient: (state) => dispatch({ type: "ADD_CLIENT" }, state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CLientForm);
