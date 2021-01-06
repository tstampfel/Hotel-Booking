// @flow
import * as React from "react";
import { Col, Row } from "react-bootstrap";
import { PropertyServiceContent } from "./property-service-content";
import { PropertyServiceHeader } from "./property-service-header";
type Props = {};
export function PropertyService(props: Props) {
  return (
    <div className="property-service">
      <Row>
        <Col xs={12} lg={4}>
          <PropertyServiceHeader />
        </Col>
        <Col xs={12} lg={7}>
          <PropertyServiceContent />
        </Col>
        <Col md={{ offset: 1 }}></Col>
      </Row>
    </div>
  );
}
