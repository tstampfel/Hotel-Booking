// @flow
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { ButtonCommon } from "./button-common";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
type Props = {
  imageSrc: string;
  title: string;
  description: string;
  callBack: () => void;
};
export function ImageCard(props: Props) {
  return (
    <div className="image-card-component">
      <img
        src={props.imageSrc}
        alt="Avatar"
        className="image-card-component-image"
      />

      <div className="image-card-component-container">
        <div className="image-card-price">
          $567<sub>.99/Night</sub>
          <div className="image-card-rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalf} />
          </div>
        </div>
        <div className="image-card-component-title">{props.title}</div>
        <div className="image-card-component-description">
          {props.description}
        </div>
        <div className="image-card-button">
          <ButtonCommon
            title="Select Room"
            id={`image-card-button-${props.title}`}
            callBack={props.callBack}
            type="button"
          />
        </div>
      </div>
    </div>
  );
}
