import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import { Button, Form, Loader, Message } from "semantic-ui-react";

const TestForm = () => (
  <div className="app">
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ display: "block" }}>
              Email
            </label>
            <Form.Input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email}
            />
            {errors.email && touched.email && <p>{errors.email}</p>}
            <Button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
              content="Reset"
            />
            <Button type="submit" content="Submit" disabled={isSubmitting} />
            Submit
          </Form>
        );
      }}
    </Formik>
  </div>
);

export default TestForm;
