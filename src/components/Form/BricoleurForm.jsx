import React, { Component } from "react";
import FormRegistrationStyle from "./css/FormRegistration.css";
import service from "./Services/RestApi";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Services from "../../containers/ClientPage";
import ServiceCard from "../../components/serviceCard";
import { ServiceCardClient } from "../serviceCardClient";

const style = {
  visibility: "hidden",
};

export class BricoleurForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      photob: new FormData(),
      villes: [],
      sousservices: [],
      sousservice: {},
      missions: [],
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  handleUploadClick = (event) => {
    let file = event.target.files[0];
    const photob = new FormData();
    photob.append("photob", file);
    this.setState({ photob: photob });
  };
  boucle = () => {
    for (let i = 0; i < 50; i++) {
      <option>i Année</option>;
    }
  };

  handleClickEvent = () => {
    const currentCondition = this.state.toggle;
    this.setState({ toggle: !currentCondition });
  };

  componentDidMount() {
    service
      .get("/villes/getvilles")
      .then((res) => this.setState({ villes: res.data }))
      .catch((error) => console.log(error));
    service
      .get("/sousservices/getsousservices")
      .then((res) => {
        this.setState({ sousservices: res.data });
      })
      .catch((error) => console.log(error));
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmitHandler = async (event) => {
    event.preventDefault();
    const Bricoleur = {
      adresseb: this.state.adresseb,
      anneexperienceb: this.state.anneexperienceb,
      aproposb: this.state.aproposb,
      cinb: this.state.cinb,
      email: this.state.email,
      motpasseb: this.state.motpasseb,
      nomb: this.state.nomb,
      prenomb: this.state.prenomb,
      photob: this.state.photob,
      telb: this.state.telb,
      idv: this.state.idv,
      idsd: this.state.idsd,
    };

    console.log("Bricoleur: ", Bricoleur);
    service.uploadImage(Bricoleur);
    this.props.history.push("/list-bricoleurs");
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
        <form onSubmit={this.onSubmitHandler}>
          <div className="container register">
            <div className="row">
              <div className="col-md-3 register-left">
                <img
                  src="https://i.ibb.co/0YGTwBJ/2767752.png"
                  alt="2767752"
                  border="0"
                />
                <h3>Devenir Bricoleur</h3>
                <p>
                  Allo-Bricoleur vous aidez a trouver le bricole le plus proche
                  de vous
                </p>
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
                      onClick={this.handleClickEvent}
                      className="nav-link "
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Bricoleur
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
                    <h3 className="register-heading">
                      Bienvenue chez Allo-Bricoleur
                    </h3>
                    <div className="row register-form">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            onChange={(e) => this.changeHandler(e)}
                            value={this.state.nomb}
                            type="text"
                            name="nomb"
                            className="form-control"
                            placeholder="Nom *"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={(e) => this.changeHandler(e)}
                            type="text"
                            name="prenomb"
                            className="form-control"
                            placeholder="Prénom *"
                            value={this.state.prenomb}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={(e) => this.changeHandler(e)}
                            type="text"
                            name="cinb"
                            className="form-control"
                            placeholder="Carte Identité Nationale *"
                            value={this.state.cinb}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={(e) => this.changeHandler(e)}
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Email *"
                            value={this.state.email}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={(e) => this.changeHandler(e)}
                            type="password"
                            name="motpasseb"
                            className="form-control"
                            placeholder="Password *"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={(e) => this.handleUploadClick(e)}
                            type="file"
                            name="image"
                            className="form-control"
                            placeholder="ImageS *"
                            accept="image/*"
                            id="upload-profile-image"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            onChange={(e) => this.changeHandler(e)}
                            type="text"
                            name="adresseb"
                            className="form-control"
                            placeholder="Adresse *"
                            value={this.state.adresseb}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            onChange={(e) => this.changeHandler(e)}
                            type="text"
                            name="telb"
                            className="form-control"
                            placeholder="Téléphone *"
                            value={this.state.telb}
                          />
                        </div>
                        <div className="form-group">
                          <select
                            onChange={(e) => this.changeHandler(e)}
                            name="idsd"
                            className="form-control"
                            defaultValue={"DEFAULT"}
                          >
                            <option className="hidden" value="DEFAULT" disabled>
                              Type de bricolage
                            </option>
                            {this.state.sousservices.map((data, index) => {
                              return (
                                <option value={data.idsd} key={index}>
                                  {data.nomsd}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <div className="form-group">
                          {
                            <select
                              name="anneexperienceb"
                              defaultValue={"DEFAULT"}
                              className="form-control"
                              onChange={(e) => this.changeHandler(e)}
                            >
                              <option
                                className="hidden"
                                value="DEFAULT"
                                disabled
                              >
                                Année d'Expérience
                              </option>
                              {[...Array(50).keys()].map((index, key) => {
                                return <option key={index}>{index}</option>;
                              })}
                            </select>
                          }
                        </div>
                        <div className="form-group">
                          <select
                            onChange={(e) => this.changeHandler(e)}
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
                        <div className="form-group">
                          <textarea
                            onChange={(e) => {
                              this.changeHandler(e);
                            }}
                            name="aproposb"
                            type="text"
                            rows="3"
                            cols="20"
                            className="form-control"
                            placeholder="Décrivez vous en quelques mots afin de donner envie aux gens de vous contacter *"
                          ></textarea>
                        </div>
                      </div>
                      <div className="w-30">
                        <div className="file-field">
                          <div>
                            <input
                              type="submit"
                              value="ENREGISTRER"
                              className="btn btn-lr btn-secondary w-30"
                            />
                          </div>
                        </div>
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
export default <BricoleurForm />;
