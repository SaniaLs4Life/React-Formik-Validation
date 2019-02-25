import React, { Component } from "react";
import {
  Divider,
  Grid,
  Segment,
  Container,
  Header,
  Icon
} from "semantic-ui-react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

class LoginRegisterField extends Component {
  render() {
    return (
      <Container>
        <Header as="h2" textAlign="center" style={{ marginTop: "150px" }}>
          <Header icon>
            <Icon name="world" />
            DevChat Platform
          </Header>
        </Header>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <LoginForm />
              </Grid.Column>
              <Grid.Column verticalAlign="middle">
                <RegisterForm />
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>
      </Container>
    );
  }
}

export default LoginRegisterField;
