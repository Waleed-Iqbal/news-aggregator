import { Link } from "react-router-dom";

import { AppNavigationLinks } from "../../utils/content";

import Logo from "../../images/logo.svg";

import "./navigation.scss";
import "../../global.scss";

export default function Navigation() {
  return (
    <section className="navigation-container">
      <div className="logo-container">
        <img src={Logo} alt="Logo" width={30} height={30} />
        <h1>Streamline News</h1>
      </div>

      <nav className="navigation">
        <Link to={AppNavigationLinks.home}>Home</Link>&nbsp;
        <Link to={AppNavigationLinks.settings}>Settings</Link>&nbsp;
        <Link to={AppNavigationLinks.newsFeed}>News Feed</Link>&nbsp;
      </nav>
    </section>
  );
}
