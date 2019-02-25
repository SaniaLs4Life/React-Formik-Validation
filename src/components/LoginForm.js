import React from "react";
import { Button, Form, Loader, Message } from "semantic-ui-react";

import * as Yup from "yup";
import { withFormik } from "formik";

const LoginForm = ({
  email,
  password,
  handleChange,
  handleSubmit,
  errors,
  isSubmitting,
  handleBlur
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
        value={email}
        error={!!errors.email}
        disabled={isSubmitting}
        onChange={handleChange("email")}
        onBlur={handleBlur}
      />
    </Form.Field>
    <Form.Field>
      <Form.Input
        icon="lock"
        name="password"
        iconPosition="left"
        type="password"
        label={errors.password}
        value={password}
        placeholder="Password"
        error={!!errors.password}
        disabled={isSubmitting}
        onChange={handleChange("password")}
        onBlur={handleBlur}
      />
    </Form.Field>
    <Button
      type="submit"
      content="Sign in"
      onClick={e => handleSubmit(e)}
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
      email: "",
      password: ""
    };
  },
  handleSubmit(values, { setSubmitting }) {
    setTimeout(() => {
      setSubmitting(false);
      console.log(values)
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
