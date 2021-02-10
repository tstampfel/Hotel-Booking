// @flow
import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FooterSocialIcons } from "./footer-social-icons";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
  faFax,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type Props = {};
export function FooterContact(props: Props) {
  return (
    <div className="footer-contact">
      <Container>
        <Row>
          <Col className="footer-contact-title" xs={12}>
            Contact Us
          </Col>
          <Col className="footer-contact-info" xs={12}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>Address: 44 New Design Street,</span>
          </Col>
          <Col className="footer-contact-info" xs={12}>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Email:info@themevessel.com</span>
          </Col>
          <Col className="footer-contact-info" xs={12}>
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span>Phone: +0477 85X6 552</span>
          </Col>
          <Col className="footer-contact-info" xs={12}>
            <FontAwesomeIcon icon={faFax} />
            <span>Fax: +0477 85X6 552</span>
          </Col>
          <Col className="footer-contact-icons-wrapper" xs={12}>
            <FooterSocialIcons />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
