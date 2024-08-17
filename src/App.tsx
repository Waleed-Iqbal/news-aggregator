import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

import HomePage from "./components/page-home/home-page";
import Page from "./components/page/page";

import { PageInfo } from "./scripts/content";
import SettingsPage from "./components/page-settings/settings-page";

import "./App.scss";

export default function App() {
  const routes = useRoutes([
    {
      path: PageInfo.home.link,
      element: (
        <Page childComponent={HomePage} pageTitle={PageInfo.home.title} />
      ),
    },
    {
      path: PageInfo.settings.link,
      element: (
        <Page
          childComponent={SettingsPage}
          pageTitle={PageInfo.settings.title}
        />
      ),
    },
    {
      path: PageInfo.default.link,
      element: <Navigate to={PageInfo.home.link} />,
    },
    {
      path: "*",
      element: <Navigate to={PageInfo.home.link} />,
    },
  ]);
  return routes;
}
