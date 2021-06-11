import React from "react";
import { Formik, Field, Form } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const LoginForm = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          // Make a async call
          console.log(data);
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting, handleSubmit }) => (
          <div>
            <h1>Connexion</h1>
            <Form>
              <div>
                <Field
                  as={TextField}
                  name="email"
                  label="Adresse mail"
                  required
                  variant="filled"
                  style={{ width: 250, marginBottom: 20 }}
                />
              </div>
              <div>
                <Field
                  as={TextField}
                  required
                  name="password"
                  label="Mot de passe"
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
                  Se connecter
                </Button>
              </div>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
