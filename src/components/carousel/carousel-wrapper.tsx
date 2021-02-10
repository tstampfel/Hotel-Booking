// @flow
import * as React from "react";
import { Col, Row } from "react-bootstrap";
import Video from "./../../assets/intro.mp4";
import { CarouselContent } from "./carousel-content";
import { CustomCarousel } from "./custom-carousel";
type Props = {};
export function CarouselWrapper(props: Props) {
  return (
    <div className="home-carousel-wrapper">
      <Row>
        <Col xs={12}>
          <div id="home-intro-overlay">
            <CustomCarousel
              carouselItems={[
                <CarouselContent
                  titleFirstPart="home:banner.messageOne.titleOne"
                  titleSecondPart="home:banner.messageOne.titleTwo"
                  description="home:banner.messageOne.description"
                />,
                <CarouselContent
                  titleFirstPart="home:banner.messageThree.titleOne"
                  titleSecondPart="home:banner.messageThree.titleTwo"
                  description="home:banner.messageThree.description"
                />,
                <CarouselContent
                  titleFirstPart="home:banner.messageTwo.titleOne"
                  titleSecondPart="home:banner.messageTwo.titleTwo"
                  description="home:banner.messageTwo.description"
                />,
              ]}
              durationMiliseconds={7000}
            />
          </div>
          <video autoPlay muted loop id="home-intro-video">
            <source src={Video} type="video/mp4" />
          </video>
        </Col>
        <Col xs={12}></Col>
      </Row>
    </div>
  );
}
