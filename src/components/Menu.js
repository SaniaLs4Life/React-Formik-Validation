import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Menu = () => (
  <Menu stackable>
    <Menu.Item>
      <img src="https://react.semantic-ui.com/logo.png" alt="logo" />
    </Menu.Item>

    <Menu.Item name="features">
      <Link to="/">
        <b style={{ color: "#111" }}>Home</b>
      </Link>
    </Menu.Item>
  </Menu>
);

export default Menu;
