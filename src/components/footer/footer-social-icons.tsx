// @flow
import * as React from "react";
import { SocialSquare } from "../common/social-square";
import {
  faTwitter,
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
type Props = {};
export function FooterSocialIcons(props: Props) {
  return (
    <div className="footer-social-icons">
      <SocialSquare
        socialLink="https://www.facebook.com/"
        backgroundColor="#4867AA"
        icon={faFacebookF}
      />
      <SocialSquare
        socialLink="https://twitter.com/"
        backgroundColor="#50ABF1"
        icon={faTwitter}
      />
      <SocialSquare
        socialLink="https://www.linkedin.com/"
        backgroundColor="#0077B5"
        icon={faLinkedinIn}
      />
      <SocialSquare
        socialLink="https://www.instagram.com/"
        backgroundColor="#C50175"
        icon={faInstagram}
      />
      <SocialSquare
        socialLink="https://www.pinterest.com/"
        backgroundColor="#DF0022"
        icon={faPinterest}
      />
    </div>
  );
}
