import React from "react";
import {
  Button,
  Form,
  Header,
  Icon
} from "semantic-ui-react";


const LoginForm = () => (
  <Form>
    <Form.Input
      icon="user"
      iconPosition="left"
      placeholder="Username"
    />
    <Form.Input
      icon="lock"
      iconPosition="left"
      type="password"
      placeholder="Password"
    />

    <Button content="Sign in" icon="sign-in" primary />
  </Form>
);

export default LoginForm
