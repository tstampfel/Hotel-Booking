// @flow
import * as React from "react";
import { Col, Row } from "react-bootstrap";
import { SearchForm } from "./search-form";
import { SearchFormBanner } from "./search-form-banner";
type Props = {};
export function SearchFormWrapper(props: Props) {
  return (
    <div className="search-from-wrapper">
      <Row className="search-from-wrapper-row ">
        <Col xs={12} md={4} lg={4}>
          <SearchFormBanner />
        </Col>
        <Col xs={12} md={8} lg={8}>
          <SearchForm />
        </Col>
      </Row>
    </div>
  );
}
