import {
  Container,
  Divider,
  Dropdown,
  Image,
  List,
  Menu,
  Segment,
  Icon,
  Input,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export const NavigationLinks = () => {
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
            <Menu.Item as="div"></Menu.Item>
            {/* <NavLink
              to="https://goddylan.com/"
            >
              God Dylan
            </NavLink> */}
          </Menu.Item>

          {/* <Dropdown item simple text="Otros enlaces del dylan">
            <Dropdown.Menu>
              <NavLink to="https://goddylan.com/">god dylan</NavLink>
            </Dropdown.Menu>
          </Dropdown> */}
        </Container>
      </Menu>
    </div>
  );
};
