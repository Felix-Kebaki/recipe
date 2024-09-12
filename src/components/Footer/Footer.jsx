import React from "react";
import "./footer.css";
import Logo from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="Footer">
      <div className="UpperFooterDiv">
        <div className="LogoDivFooter">
          <img src={Logo} alt="" />
        </div>
        <div className="QuickLinksNewsLetterDiv">
          <div className="QuickLinksDiv">
            <p className="QuickLinksTittle">Quick links</p>
            <div className="ActualLinksFooter">
              <p><Link to="/recipe">Home</Link></p>
              <p><Link to="/recipes">Recipes</Link></p>
              <p><Link to="/blog">Blog</Link></p>
              <p><Link to="/shop">Shop</Link></p>
              <p><Link to="/contact">Contact</Link></p>
            </div>
          </div>
          <div className="NewLetterDiv">
            <p className="SubscribeInfo">Subscribe to our newsletter to get latest insight on food recipes straight to your inbox.</p>
            <input type="text" placeholder="Email Address..."/>
            <button id="NewsLetterBtn">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="LowerFooterDiv">
        <div className="ByWhoFooter">
          <FontAwesomeIcon icon={faCircle} id="DotIcon" />
          <p className="BuiltFooter">
            Built by{" "}
            <a href="https://felix-kebaki.github.io/Portfolio/" target="_blank">
              felixKebakiTech
            </a>
          </p>
        </div>
        <div className="DivWIthIconsPrivacyFooter">
          <div>
            <FontAwesomeIcon icon={faXTwitter} id="SocialsIcons" />
            <FontAwesomeIcon icon={faInstagram} id="SocialsIcons" />
            <FontAwesomeIcon icon={faTiktok} id="SocialsIcons" />
            <FontAwesomeIcon icon={faFacebookF} id="SocialsIcons" />
          </div>
          <p className="PrivacyFooter">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}