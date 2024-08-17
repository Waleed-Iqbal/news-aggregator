import { useState } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import Page from "./components/page/page";
import HomePage from "./pages/home/home";
import SettingsPage from "./pages/settings/settings";
import NewsFeedPage from "./pages/news-feed/news-feed";

import { PageInfo } from "./utils/content";
import { defaultUserSettings, UserSettingsContext } from "./utils/userSettings";

import "./App.scss";

export default function App() {
  const [userSettings, setUserSettings] = useState(defaultUserSettings);
  const contextValue = { userSettings, setUserSettings };

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
  return (
    <UserSettingsContext.Provider value={contextValue}>
      {routes}
    </UserSettingsContext.Provider>
  );
}
