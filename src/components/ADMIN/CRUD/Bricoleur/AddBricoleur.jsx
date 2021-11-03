import React, { Component } from "react";
import BricoleurService from "./Services/BricoleurService";
import { Redirect } from "react-router-dom";
import FooterComponent from "./FooterComponent";
import { ADD_BRICOLEUR } from "../../../../actions/actionType";
import { connect } from "formik";

const style = {
  visibility: "hidden",
};

export class AddBricoleur extends Component {
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
      villes: [],
      sousservices: [],
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

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
    BricoleurService.get("/villes/getvilles")
      .then((res) => this.setState({ villes: res.data }))
      .catch((error) => console.log(error));
    BricoleurService.get("/sousservices/getsousservices")
      .then((res) => {
        this.setState({ sousservices: res.data });
      })
      .catch((error) => console.log(error));
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmitHandler = async (event) => {
    const Bricoleur = {
      adresseb: this.state.adresseb,
      anneexperienceb: this.state.anneexperienceb,
      aproposb: this.state.aproposb,
      cinb: this.state.cinb,
      email: this.state.email,
      motpasseb: this.state.motpasseb,
      nomb: this.state.nomb,
      prenomb: this.state.prenomb,
      telb: this.state.telb,
      idv: this.state.idv,
      idsd: this.state.idsd,
    };
    this.props.addBricoleur(Bricoleur);
  };

  render() {
    return (
      <div>
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        />

        <div className="container register">
          <div className="row">
            <div className="col-md-3 register-left">
              <img
                src="https://i.ibb.co/0YGTwBJ/2767752.png"
                alt="2767752"
                border="0"
              />
              <h3>Ajouter Bricoleur</h3>
              <p>
                Allo-Bricoleur vous aidez a trouver le bricole le plus proche de
                vous
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
                    AJOUTER BRICOLEUR
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
                  <form onSubmit={this.onSubmitHandler}>
                    <div className="row register-form">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Nom</label>
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
                          <label>Prénom</label>
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
                          <label>Carte d'Identité Nationale</label>
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
                          <label>Email</label>
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
                          <label>Mot de passe</label>
                          <input
                            onChange={(e) => this.changeHandler(e)}
                            type="password"
                            name="motpasseb"
                            className="form-control"
                            placeholder="Password *"
                          />
                        </div>
                        <div className="form-group">
                          <label>Adresse</label>
                          <input
                            onChange={(e) => this.changeHandler(e)}
                            type="text"
                            name="adresseb"
                            className="form-control"
                            placeholder="Adresse *"
                            value={this.state.adresseb}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Téléphone</label>
                          <input
                            onChange={(e) => this.changeHandler(e)}
                            type="text"
                            name="telb"
                            className="form-control"
                            placeholder="Téléphone *"
                            value={this.state.telb}
                          />
                        </div>
                        <div className="form-group ">
                          <label>Type Bricolage</label>
                          <select
                            onChange={(e) => this.changeHandler(e)}
                            name="idsd"
                            className="form-control"
                            defaultValue={"DEFAULT"}
                            required=""
                          >
                            <option className="hidden" value="DEFAULT" disabled>
                              Type Bricolage
                            </option>
                            {this.state.sousservices.map((data, index) => {
                              return (
                                <option value={data.idsd} key={index}>
                                  {data.nomsd}
                                </option>
                              );
                              console.log("data.noms: ", data.noms);
                            })}
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Année Expérience</label>
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
                          <label>Ville</label>
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
                          <label>Apropos de Moi</label>
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
                    </div>
                    <div className="w-30">
                      <div className="file-field">
                        <div>
                          <button
                            className="btn btn-lr btn-secondary w-30"
                            onClick={this.onSubmitHandler}
                          >
                            AJOUTER
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   const Bricoleur = {
//     adresseb: state.adresseb,
//     anneexperience: state.anneexperience,
//     aproposb: state.aproposb,
//     cinb: state.cinb,
//     email: state.email,
//     idv: state.idv,
//     idsd: state.idsd,
//     motpasseb: state.motpasseb,
//     nomb: state.nomb,
//     prenomb: state.prenomb,
//     telb: state.telb,
//   };
//   return {
//     Bricoleur,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addBricoleur: (Bricoleur) => dispatch(ADD_BRICOLEUR(Bricoleur)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AddBricoleur);

export default AddBricoleur;
