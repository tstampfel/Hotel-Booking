// @flow
import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  faConciergeBell,
  faUtensils,
  faTv,
  faDumbbell,
  faParking,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { PropertyServiceAmenity } from "./property-service-amenity";
type Props = {};
export function PropertyServiceContent(props: Props) {
  return (
    <div className="property-service-content">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <PropertyServiceAmenity
              iconDefinition={faConciergeBell}
              title="24-hour Reception"
              description="Lorem ipsum dolor sit amet, conser adipisicing elit. Numquam"
            />
          </Col>
          <Col xs={12} md={4}>
            <PropertyServiceAmenity
              iconDefinition={faUtensils}
              title="Room Service"
              description="Lorem ipsum dolor sit amet, conser adipisicing elit. Numquam"
            />
          </Col>
          <Col xs={12} md={4}>
            <PropertyServiceAmenity
              iconDefinition={faTv}
              title="Flat Screen TV"
              description="Lorem ipsum dolor sit amet, conser adipisicing elit. Numquam"
            />
          </Col>
          <Col xs={12} md={4}>
            <PropertyServiceAmenity
              iconDefinition={faDumbbell}
              title="Gym"
              description="Lorem ipsum dolor sit amet, conser adipisicing elit. Numquam"
            />
          </Col>
          <Col xs={12} md={4}>
            <PropertyServiceAmenity
              iconDefinition={faParking}
              title="Free Parking"
              description="Lorem ipsum dolor sit amet, conser adipisicing elit. Numquam"
            />
          </Col>
          <Col xs={12} md={4}>
            <PropertyServiceAmenity
              iconDefinition={faWifi}
              title="Free Wi-Fi"
              description="Lorem ipsum dolor sit amet, conser adipisicing elit. Numquam"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
