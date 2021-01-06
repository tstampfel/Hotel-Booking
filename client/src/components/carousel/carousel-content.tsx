// @flow
import * as React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ButtonCommon } from "../common/button-common";
import { ButtonTransparent } from "../common/button-transparent";
import * as Scroll from "react-scroll";
type Props = {
  titleFirstPart: string;
  titleSecondPart: string;
  description: string;
};
export function CarouselContent(props: Props) {
  const { t } = useTranslation();
  return (
    <div className="carousel-content">
      <Row>
        <Col>
          <h1>
            <strong id="home-carousel-title-first">
              {t(props.titleFirstPart)}
            </strong>
            <span id="home-carousel-title-second">
              {t(props.titleSecondPart)}
            </span>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{t(props.description)}</p>
        </Col>
      </Row>
      <Row>
        <Col id="home-carousel-button-one-col">
          <Scroll.Link to="search-from-wrapper" spy smooth duration={1500}>
            <ButtonCommon
              id="carrousel-book-now-button"
              title="home:banner.bookNow"
              type="button"
              callBack={() => {}}
            />
          </Scroll.Link>
        </Col>
        <Col id="home-carousel-button-two-col">
          <Scroll.Link to="property-service" spy smooth duration={1500}>
            <ButtonTransparent callBack={() => {}} />
          </Scroll.Link>
        </Col>
      </Row>
    </div>
  );
}
