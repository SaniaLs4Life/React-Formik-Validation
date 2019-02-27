import React from "react";
import { Button, Form, Loader, Message } from "semantic-ui-react";

import * as Yup from "yup";
import { Formik } from "formik";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email!")
    .required("Email cannot be empty!"),
  password: Yup.string()
    .required("Password cannot be empty!")
    .min(6, "The password must contain at least 6 characters long!")
    .max(100, "The password can contain maximum 100 characters long!")
});

const LoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(false);
        resetForm();
      }, 500);
    }}
    validationSchema={validationSchema}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <Form onSubmit={handleSubmit}>
          <Loader size="medium" active={isSubmitting}>
            <b>Checking credentials...</b>
          </Loader>
          <h4>Sign in</h4>
          <Form.Field>
            <Form.Input
              loading={isSubmitting}
              icon="user"
              name="email"
              label={touched.email ? errors.email : null}
              iconPosition="left"
              placeholder="Email"
              value={values.email}
              error={errors.email && touched.email}
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              loading={isSubmitting}
              icon="lock"
              name="password"
              iconPosition="left"
              type="password"
              label={touched.password ? errors.password : null}
              value={values.password}
              placeholder="Password"
              error={errors.password && touched.password}
              disabled={isSubmitting}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Field>
          <Button
            type="submit"
            content="Sign in"
            icon="sign-in"
            primary
            disabled={!!errors.email || !!errors.password || isSubmitting}
          />
          {errors.email && touched.email && (
            <Message
              negative
              icon="info"
              content="Please try again."
              header="Wrong credentials!"
            />
          )}
        </Form>
      );
    }}
  </Formik>
);

export default LoginForm;
