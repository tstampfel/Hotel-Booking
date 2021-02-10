// @flow
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

type Props = {
  iconDefinition: IconDefinition;
  title: string;
  description: string;
};
export function PropertyServiceAmenity(props: Props) {
  const { t } = useTranslation();
  return (
    <div className="property-service-amenity">
      <Container>
        <Row>
          <Col xs={12} className="property-service-amenity-icon">
            <FontAwesomeIcon icon={props.iconDefinition} size="2x" />
          </Col>
          <Col xs={12} className="property-service-amenity-title">
            {t(props.title)}
          </Col>
          <Col xs={12} className="property-service-amenity-description">
            {t(props.description)}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
