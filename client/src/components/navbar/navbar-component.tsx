import React from "react";
import { Col, Row } from "react-bootstrap";
import { useWindowSize } from "../../utils/window-utils";
import NavbarLowerLinks from "./navbar-components/navbar-lower-links";
import NavbarLowerRegisterComponent from "./navbar-components/navbar-lower-register";
import NavbarUpper from "./navbar-components/navbar-upper";

function NavbarComponent(props: any) {
  const size = useWindowSize();

  return (
    <>
      <Row>
        <Col>
          <NavbarUpper />
        </Col>
      </Row>
      <Row className="navbar-lower">
        {size.width > 990 && <Col md={{ span: 1 }}></Col>}
        <Col>
          <NavbarLowerLinks />
        </Col>
        {size.width > 990 && (
          <Col>
            <NavbarLowerRegisterComponent />
          </Col>
        )}
      </Row>
    </>
  );
}

export default NavbarComponent;
