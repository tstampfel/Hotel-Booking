// @flow
import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
type Props = {};
export function PropertyServiceHeader(props: Props) {
  return (
    <div className="property-service-header">
      <Container>
        <Row>
          <Col xs={12} id="property-service-header-title">
            Property Services
          </Col>
          <Col xs={12} id="property-service-header-content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever
            </p>
            <p>
              Lorem industry's standard dummy text everLorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
