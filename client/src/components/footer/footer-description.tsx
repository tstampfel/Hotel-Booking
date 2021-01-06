// @flow
import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
type Props = {};
export function FooterDescription(props: Props) {
  return (
    <div className="footer-description">
      <Container>
        <Row>
          <Col className="footer-description-title" xs={12}>
            ALPHA
          </Col>
          <Col className="footer-description-paragraph" xs={12}>
            <p>
              Lorem ipsum dolor sit amet, conser adipiscing elit. Maecenas in
              pulvinar neque. Nulla finibus lobortis pulvinar. Donec a conser
              nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar
              nisi tincidunt. Aliquam erat volutpat. Curabitur convallis
              fringilla diam.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
