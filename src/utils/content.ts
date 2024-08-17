import { IPageInfo } from "./interfaces";

export enum AppNavigationLinks {
  default = "/",
  home = "/home",
  settings = "/settings",
  newsFeed = "/news-feed",
}

export enum PageTitles {
  home = "Home",
  settings = "Settings",
  newsFeed = "News Feed",
}

export const PageInfo: IPageInfo = {
  default: {
    title: PageTitles.home,
    link: AppNavigationLinks.home,
  },
  home: {
    title: PageTitles.home,
    link: AppNavigationLinks.home,
  },
  settings: {
    title: PageTitles.settings,
    link: AppNavigationLinks.settings,
  },
  newsFeed: {
    title: PageTitles.newsFeed,
    link: AppNavigationLinks.newsFeed,
  },
};
