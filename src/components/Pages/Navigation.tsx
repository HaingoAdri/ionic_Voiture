import React, { useState } from "react";
import "../Body/bootstrap.min.css";
import "../Body/bootstrap.rtl.min.css";
import "../dist/bootstrap-icons.css";
import "../dist/bootstrap-icons.min.css";
import "./bootstrap.bundle.min";
import "./Acceuil.css";
import { Link, withRouter } from "react-router-dom";
import send_raw from "../../utils/Sender";
import { useHistory } from "react-router";
import { useIonLoading } from "@ionic/react";

function Navigation({ sessionProp }: { sessionProp: any }) {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setDisplay] = useState('none');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if(menuOpen == false) setDisplay('none');
    else setDisplay('block');
  };

  const [present, dismiss] = useIonLoading();

  const history = useHistory();

  const logout = async (session: any) => {
    try {
      const token = session.donnee.token;
      const reponse = await send_raw(
        "https://vente-occaz-production-de3d.up.railway.app/api/v1/logout",
        {},
        token
      );
      await present("Logging out...");
      setTimeout(async () => {
        dismiss();
        history.push(`/`);
      }, 1000);
    } catch (e) {
      console.log(e);
      history.push(`/Accueil`);
    }
  };

  return (
    <>
    <nav className="fixed-bottom" style={{ width : 'fit-content' }}>
      <div className="d-flex p-3">
        <button
          className="btn btn-outline-white border rounded-circle bg-primary"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <i className="bi bi-arrow-right text-white"></i>
        </button>
      </div>
    </nav>
    <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bgg" style={{display : isVisible}}>
      <div className="container-fluid p-1">
        <button
          className="btn btn-outline-white"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list text-white"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-white position-relative rounded-pill text-center ml-5 "
        >
          <Link to="/Notification">
            <i className="bi bi-bell-fill text-white"></i>
          </Link>
          <span className="position-absolute top-0 w-100 start-100 translate-middle badge rounded-pill bg-white text">
            99+
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
          <Link to="/Compte">
          <i className="bi bi-person-circle text-white"></i>
          </Link>
        <button
          type="button"
          onClick={() => logout(sessionProp)}
          className="btn btn-outline-white position-relative rounded-pill text-center "
        >
          <i className="bi bi-box-arrow-right text-white"></i>
        </button>
        <button
          className="btn btn-outline-white border rounded-circle bg-primary"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <i className="bi bi-arrow-left text-white"></i>
        </button>
        <div className="collapse navbar-collapse bw" id="navbarCollapse">
          <ul className="navbar-nav fw-bolder">
            <li className="nav-item">
              <Link
                  to="/Acceuil"
                  className="nav-link text-dark"
                  aria-current="page"
              >
                Vos annonces validées non vendues
              </Link>
            </li>
            <li className="nav-item">
              <Link
                  to="/AllAnnonce"
                  className="nav-link text-dark"
                  aria-current="page"
              >
                Toutes vos annonces
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Inserer_Annonce" className="nav-link text-dark">
                Ajouter annonce
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navigation;
