import React from "react";
import { Link } from "react-router-dom";
import { AppNavigationLinks } from "../../utils/content";

export default function Navigation() {
  return (
    <div>
      <Link to={AppNavigationLinks.home}>Home</Link>&nbsp;
      <Link to={AppNavigationLinks.settings}>Settings</Link>&nbsp;
      <Link to={AppNavigationLinks.newsFeed}>News Feed</Link>&nbsp;
      <br />
      <br />
      <br />
    </div>
  );
}
