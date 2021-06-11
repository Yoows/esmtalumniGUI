import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerrForm";
import Navbarr from "./components/navbar";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Accueil from './components/accueil';

function App() {
  return (
    <React.Fragment>
      <RegisterForm/>
    </React.Fragment>
  );
}

export default App;
