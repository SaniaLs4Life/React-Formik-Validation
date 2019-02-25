import React from "react";
import { Button, Form, Loader, Message, Header } from "semantic-ui-react";

import * as Yup from "yup";
import { withFormik } from "formik";

const LoginForm = ({
  email,
  password,
  handleChange,
  handleSubmit,
  errors,
  isSubmitting
}) => (
  <Form>
    <Loader size="medium" active={isSubmitting}>
      <b>Checking credentials...</b>
    </Loader>
    <h4>Sign in</h4>
    <Form.Field>
      <Form.Input
        icon="user"
        name="email"
        label={errors.email}
        iconPosition="left"
        placeholder="Email"
        error={!!errors.email}
        disabled={isSubmitting}
        onChange={handleChange("email")}
      />
    </Form.Field>
    <Form.Field>
      <Form.Input
        icon="lock"
        name="password"
        iconPosition="left"
        type="password"
        label={errors.password}
        placeholder="Password"
        error={!!errors.password}
        disabled={isSubmitting}
        onChange={handleChange("password")}
      />
    </Form.Field>
    <Button
      type="submit"
      content="Sign in"
      onClick={handleSubmit}
      icon="sign-in"
      primary
      disabled={!!errors.email || !!errors.password || isSubmitting}
    />
    {errors.email || errors.password ? (
      <Message
        negative
        icon="info"
        content="Please try again."
        header="Wrong credentials!"
      />
    ) : null}
  </Form>
);

export default withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  handleSubmit(
    { email, password },
    { setSubmitting, resetForm, setStatus, setError }
  ) {
    setTimeout(() => {
      if (email === "hakan@gmail.com") {
        setStatus({ email: "This email is already exists!", password: "ASD" });
        setSubmitting(false);
      } else {
        resetForm();
      }
    }, 2000);
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email!")
      .required("This field cannot be empty!"),
    password: Yup.string()
      .required("This field cannot be empty!")
      .min(6, "The password must contain at least 6 characters long!")
      .max(100, "The password can contain maximum 100 characters long!")
  })
})(LoginForm);
