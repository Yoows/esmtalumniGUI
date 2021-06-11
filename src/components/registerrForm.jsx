import React from "react";
import { Formik, Field, Form } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const RegisterForm = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Formik
        initialValues={{ nom: "", prenom: "", birthday: "" }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          // Make a async call
          console.log(data);
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting, handleSubmit }) => (
          <div>
            <h1>Inscription</h1>
            <Form>
              <div>
                <Field
                  required
                  as={TextField}
                  name="nom"
                  label="Nom"
                  variant="filled"
                  style={{ width: 250, marginBottom: 20 }}
                />
              </div>
              <div>
                <Field
                  required
                  as={TextField}
                  name="prenom"
                  label="Prénom"
                  variant="filled"
                  style={{ width: 250, marginBottom: 20 }}
                />
              </div>
              <div>
                <Field
                  required
                  as={TextField}
                  InputLabelProps={{ shrink: true }}
                  name="birthday"
                  label="Date de naissance"
                  type="date"
                  variant="filled"
                  style={{ width: 250, marginBottom: 20 }}
                />
              </div>
              <div>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  size="medium"
                  color="primary"
                  variant="contained"
                >
                  Créer mon compte
                </Button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
