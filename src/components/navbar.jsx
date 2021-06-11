import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
const Navbarr = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand to="/connexion">
        <img
          src="./logoesmt.png"
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt=""
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <NavLink href="/accueil" to="/accueil">
          Accueil
        </NavLink>
        <NavLink href="/connexion" to="/connexion">
          Connexion
        </NavLink>
        <NavLink href="/inscription" to="/inscription">
          Inscription
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default Navbarr;
