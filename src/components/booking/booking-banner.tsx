// @flow
import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { BookingBannerBreadcrumbs } from "./booking-banner-breadcrumbs";
type Props = {};
export function BookingBanner(props: Props) {
  const { t } = useTranslation();
  return (
    <div className="booking-banner">
      <Container>
        <Row>
          <Col>{t("booking:bookingSystem")}</Col>
        </Row>
        <Row>
          <Col>
            <BookingBannerBreadcrumbs />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
