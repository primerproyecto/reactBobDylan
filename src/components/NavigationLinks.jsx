import { Container, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export const NavigationLinks = () => {
  const isLogIn = localStorage.getItem("token") ? true : false;

  return (
    <div>
      <Menu fixed="top" inverted size="huge">
        <Container>
          <Menu.Item as="div" header>
            <NavLink to="/">Inicio</NavLink>
          </Menu.Item>
          <Menu.Item as="div">
            <NavLink to="/canciones">Canciones</NavLink>
          </Menu.Item>
          <Menu.Item as="div">
            <Menu.Item as="div">
              <NavLink to="/discografia">Discografia</NavLink>
            </Menu.Item>
            <Menu.Item as="div">
              <NavLink to="/users/register">Register</NavLink>
            </Menu.Item>
            {isLogIn ? (
              <Menu.Item as="div">
                <NavLink to="/users/login">Logout</NavLink>
              </Menu.Item>
            ) : (
              <Menu.Item as="div">
                <NavLink to="/users/login">Login</NavLink>
              </Menu.Item>
            )}
            <Menu.Item as="div">
              <NavLink to="/confirmationcode">ConfirmationCode</NavLink>
            </Menu.Item>
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};
