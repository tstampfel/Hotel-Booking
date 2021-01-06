// @flow
import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../../utils/window-utils";
type Props = {};
export function SearchFormBanner(props: Props) {
  const { t } = useTranslation();
  const size = useWindowSize();
  return (
    <div className="search-from-banner">
      <Container>
        <Row>
          <Col id="search-from-banner-upper">
            {t("home:search.banner.upper")}
            {size.width < 766 && (
              <span id="search-from-banner-lower">
                <span id="search-from-banner-lower-first">
                  {t("home:search.banner.lower")}
                </span>
                <span id="search-from-banner-lower-second">
                  {t("home:search.banner.lowerSecond")}
                </span>
              </span>
            )}
          </Col>
          {size.width > 765 && (
            <Col id="search-from-banner-lower">
              <span id="search-from-banner-lower-first">
                {t("home:search.banner.lower")}
              </span>
              <span id="search-from-banner-lower-second">
                {t("home:search.banner.lowerSecond")}
              </span>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}
