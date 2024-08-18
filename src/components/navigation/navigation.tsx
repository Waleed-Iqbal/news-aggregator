import { useState } from "react";
import { Link } from "react-router-dom";

import { AppNavigationLinks, PageInfo } from "../../utils/content";

import LOGO from "../../images/logo.svg";
import ICON_NEWSPAPER from "../../images/newspaper.svg";

import "./navigation.scss";
import "../../global.scss";
import { ILinkTitle } from "../../utils/interfaces";

export default function Navigation() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const toggleMobileNavigationMenu = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  const navigationLinks: ILinkTitle[] = Object.values(PageInfo).filter(
    (pageInfo) => pageInfo.link !== AppNavigationLinks.default,
  );

  return (
    <>
      <section className="navigation-container-desktop">
        <Link className="logo-container" to={PageInfo.home.link}>
          <img className="mr-8" src={LOGO} alt="Logo" width={30} height={30} />
          <h2>Streamline News</h2>
        </Link>

        <nav className="navigation-links">
          {navigationLinks.map((Page) => (
            <Link key={Page.title} className="link" to={Page.link}>
              {Page.title}
            </Link>
          ))}
        </nav>
      </section>
      <section className="navigation-container-mobile">
        <Link className="logo-container" to={PageInfo.home.link}>
          <h2>Streamline News</h2>
        </Link>

        <img
          alt="Close"
          width={30}
          height={30}
          src={ICON_NEWSPAPER}
          onClick={toggleMobileNavigationMenu}
          className={`nav-menu-button ${isNavigationOpen ? "open" : "close"}`}
        />

        <nav className={`navigation-links ${isNavigationOpen ? "open" : ""}`}>
          {navigationLinks.map((Page) => (
            <Link
              to={Page.link}
              key={Page.title}
              className="link"
              onClick={toggleMobileNavigationMenu}
            >
              {Page.title}
            </Link>
          ))}
        </nav>
      </section>
    </>
  );
}
