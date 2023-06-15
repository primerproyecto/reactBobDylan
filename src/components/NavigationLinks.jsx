import {
  Container,
  Divider,
  Dropdown,
  Image,
  List,
  Menu,
  Segment,
  Icon,
} from "semantic-ui-react";

export const NavigationLinks = () => {
  return (
    <div>
      <Menu fixed="top" inverted size="huge">
        <Container>
          <Menu.Item as="a" header link={true} href="/">
            <Icon disabled name="eye" size="huge" /> bobDylan
          </Menu.Item>
          <Menu.Item as="a" link={true} href="/canciones" active>
            Canciones
          </Menu.Item>
          <Menu.Item as="a" link={true} href="/cancion">
            Cancion
          </Menu.Item>

          <Dropdown item simple text="Otros enlaces del dylan">
            <Dropdown.Menu>
              <Dropdown.Item href="https://goddylan.com/">
                god dylan
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className="dropdown icon" />
                <span className="text">Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
    </div>
  );
};
