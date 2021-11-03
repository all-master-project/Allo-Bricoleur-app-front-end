import React from "react";
import fontCss from "./fontCss.css";
// import sce from "../../images/Acceuil/sce.jpg";
import bricoMaison from "../../images/Acceuil/bricoMai.jpg";
import peinture from "../../images/Acceuil/peinture.jpg";
import { Link } from "@material-ui/core";
// import bricoMaison from "../../images/Acceuil/bricoMai.jpg";
// import bricoMaison from "../../images/Acceuil/bricoMai.jpg";

export default function index() {
  const tableImg = {};
  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <link href={fontCss} />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <a href="/">
              <img
                src={bricoMaison}
                className="card-img-top tableImg"
                alt="..."
              />
              <div className="overlay">
                <h5 className="text">Bricolage de maison</h5>
              </div>
            </a>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <a href="/">
              <img src={peinture} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a href="/">
              <img
                src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a href="/">
              <img
                src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="overlay">
                <h5 className="text">Card title</h5>
              </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a href="/">
              <img
                src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a href="/">
              <img
                src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a href="/">
              <img
                src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a href="/">
              <img
                src="https://mdbootstrap.com/img/new/standard/city/043.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <a href="/">
              <img
                src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
