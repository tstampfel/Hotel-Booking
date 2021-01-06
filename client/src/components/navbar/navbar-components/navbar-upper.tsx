import React from "react";
import { Col, Row } from "react-bootstrap";
import NavbarNeedSupport from "./navbar-need-support";
import { NavbarSocialLogin } from "./navbar-social-login";

function NavbarUpper(props: any) {
  return (
    <>
      <div className="navbar-upper">
        <Row>
          <Col>
            <NavbarNeedSupport />
          </Col>
          <Col>
            <NavbarSocialLogin />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default NavbarUpper;
