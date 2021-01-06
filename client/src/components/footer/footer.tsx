// @flow
import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FooterContact } from "./footer-contact";
import { FooterCopyright } from "./footer-copyright";
import { FooterDescription } from "./footer-description";
type Props = {};
export function Footer(props: Props) {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs={12} md={5} lg={5}>
            <FooterDescription />
          </Col>
          <Col md={{ offset: 1 }} lg={{ offset: 1 }}></Col>
          <Col xs={12} md={5} lg={5}>
            <FooterContact />
          </Col>
          <Col xs={12}>
            <FooterCopyright />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
