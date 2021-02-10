import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BookingStages } from "./booking-stages";
type Props = {};
export function BookingMenu(props: Props) {
  return (
    <div className="booking-menu" data-testid="booking-menu">
      <Container>
        <Row className="booking-menu-row">
          <Col>
            <BookingStages />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
