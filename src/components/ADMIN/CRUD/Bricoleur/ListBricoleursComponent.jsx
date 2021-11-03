import React, { Component } from "react";
import BricoleurService from "./Services/BricoleurService";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

class ListBricoleursComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Bricoleurs: [],
    };
    this.addBricoleur = this.addBricoleur.bind(this);
    this.editBricoleur = this.editBricoleur.bind(this);
    this.deleteBricoleur = this.deleteBricoleur.bind(this);
  }

  deleteBricoleur(id) {
    BricoleurService.deleteBricoleur(id).then((res) => {
      this.setState({
        Bricoleurs: this.state.Bricoleurs.filter(
          (Bricoleur) => Bricoleur.id !== id
        ),
      });
    });
  }
  viewBricoleur(id) {
    this.props.history.push(`/view-Bricoleur/${id}`);
  }
  editBricoleur(id) {
    this.props.history.push(`/add-Bricoleur/${id}`);
  }

  componentDidMount() {
    BricoleurService.getBricoleurs().then((res) => {
      console.log(res);
      this.setState({ Bricoleurs: res.data });
      console.log(this.state.Bricoleurs);
    });
  }

  addBricoleur() {
    this.props.history.push("/add-Bricoleur/_add");
  }

  render() {
    return (
      <div>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        />
        <HeaderComponent />
        <h2 className="text-center">Bricoleurs List</h2>
        <div className="row row-cols-lg-auto g-3 align-items-center">
          <button
            className="btn btn-sm btn-success mb-2"
            onClick={this.addBricoleur}
          >
            {" "}
            Add Bricoleur
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Carte Identité Nationale</th>
                <th>email</th>
                <th>Mot de passe</th>
                <th>Adresseb</th>
                <th>Numéro de téléphone</th>
                <th>Service de bricolage</th>
                <th>Année d'éxpérience</th>
                <th>Ville</th>
                <th>Apropos</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Bricoleurs.map((brico) => {
                return (
                  <tr key={brico.idb}>
                    {" "}
                    <td> {brico.nomb} </td>
                    <td> {brico.prenomb}</td>
                    <td> {brico.cinb}</td>
                    <td> {brico.email} </td>
                    <td> {brico.motpasseb}</td>
                    <td> {brico.adresseb}</td>
                    <td> {brico.telb} </td>
                    <td>{}</td>
                    <td> {brico.anneexperienceb}</td>
                    <td> {brico.nomv}</td>
                    <td> {brico.aproposb}</td>
                    <td>
                      <button
                        onClick={() => this.editBricoleur(brico.id)}
                        className="btn btn-sm btn-info"
                      >
                        Update{" "}
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.deleteBricoleur(brico.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete{" "}
                      </button>
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => this.viewBricoleur(brico.id)}
                        className="btn btn-sm btn-info"
                      >
                        View{" "}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default ListBricoleursComponent;
