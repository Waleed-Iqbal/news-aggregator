import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

import Page from "./components/page/page";
import HomePage from "./pages/page-home/home-page";
import SettingsPage from "./pages/page-settings/settings-page";
import NewsFeedPage from "./pages/page-news-feed/news-feed-page";

import { PageInfo } from "./scripts/content";

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
      path: PageInfo.newsFeed.link,
      element: (
        <Page
          childComponent={NewsFeedPage}
          pageTitle={PageInfo.newsFeed.title}
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
