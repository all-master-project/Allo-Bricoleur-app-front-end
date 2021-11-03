import "./App.css";
import { ClientPage } from "./containers/ClientPage";
import serviceCard from "./components/serviceCardBricoleur";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CustomerAccessPage } from "./containers/customerAccessPage";
import { BricoleurForm } from "./components/Form/BricoleurForm";
import { CLientForm } from "./components/Form/CLientForm";
import ListBricoleursComponent from "./components/ADMIN/CRUD/Bricoleur/ListBricoleursComponent";
import AddBricoleur from "./components/ADMIN/CRUD/Bricoleur/AddBricoleur";
import ViewBricoleurComponent from "./components/ADMIN/CRUD/Bricoleur/ViewBricoleurComponent";
import { Component } from "react";
import Acceuil from "./containers/Acceuil/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/Acceuill" component={Acceuil}></Route>
            <Route path="/add-bricoleur/:id" component={AddBricoleur}></Route>
            <Route
              path="/view-bricoleur/:id"
              component={ViewBricoleurComponent}
            ></Route>

            {/* Bricoleur Roure */}
            <Route path="/listBrico" component={ListBricoleursComponent} />
            <Route path="/BricoleurForm" exact component={BricoleurForm} />
            <Route path="/list-bricoleurs" exact component={serviceCard} />

            <Route
              path="/customer/access/:action"
              exact
              component={CustomerAccessPage}
            />

            {/* Route Client */}
            <Route path="/clientform" exact component={CLientForm} />
            <Route path="/listmissions" exact component={ClientPage} />
            <Route path="/" exact component={ClientPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
