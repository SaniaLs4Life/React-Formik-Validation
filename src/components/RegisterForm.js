import React, { Component, Fragment } from "react";
import { Button, Modal, Form, Grid, Header, Icon } from "semantic-ui-react";

class RegisterForm extends Component {
  render() {
    return (
      <Fragment>
        <Grid columns={2} stackable textAlign="center">
          <Grid.Row verticalAlign="middle">
            <Grid.Column verticalAlign="middle">
              <Header icon>
                <Icon name="signup" />
                Create a new account
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Modal
          size={"tiny"}
          trigger={<Button content="Sign up" inverted color='green' icon="signup" />}
          closeIcon={true}
        >
          <Modal.Header>Create a new account</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Username"
                placeholder="Username"
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Password"
                type="password"
                placeholder="Password"
              />
              <Button content="Login" primary />
            </Form>
          </Modal.Content>
        </Modal>
      </Fragment>
    );
  }
}

export default RegisterForm;
