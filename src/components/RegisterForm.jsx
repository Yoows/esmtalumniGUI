import React, { Component } from "react";
import Joi from "@hapi/joi";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
class RegisterForm extends Component {
  state = {};
  schema = {
    nom: Joi.string().required().label("Nom"),
    prenom: Joi.string().required().label("Prénom"),
    birthday: Joi.string().required().label("Birthday"),
  };
  handleSubmit = (e) => {
    console.log("Clicked");
  };
  render() {
    return (
      <div>
        <h1>Inscription</h1>
        <form onSubmit={() => this.handleSubmit}>
          <div>
            <TextField
              required
              id="nom"
              label="Nom"
              variant="filled"
              style={{ width: 250, marginBottom: 20 }}
            />
          </div>
          <div>
            <TextField
              required
              id="prenom"
              label="Prénom"
              variant="filled"
              style={{ width: 250, marginBottom: 20 }}
            />
          </div>
          <div>
            <TextField
              required
              id="birthday"
              label="Date de naissance"
              defaultValue="1999-05-24"
              type="date"
              variant="filled"
              style={{ width: 250, marginBottom: 20 }}
            />
          </div>
          <div>
            <Button
              onClick={this.handleSubmit}
              size="medium"
              color="primary"
              variant="contained"
            >
              S'inscrire
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
