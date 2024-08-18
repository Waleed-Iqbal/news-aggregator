import { IPageInfo, IStringArray } from "./interfaces";

export enum AppNavigationLinks {
  default = "/",
  home = "/home",
  newsFeed = "/news-feed",
  settings = "/settings",
}

export enum PageTitles {
  default = "/",
  home = "Home",
  newsFeed = "News Feed",
  settings = "Settings",
}

export const PageInfo: IPageInfo = {
  default: {
    title: PageTitles.home,
    link: AppNavigationLinks.default,
  },
  home: {
    title: PageTitles.home,
    link: AppNavigationLinks.home,
  },
  newsFeed: {
    title: PageTitles.newsFeed,
    link: AppNavigationLinks.newsFeed,
  },
  settings: {
    title: PageTitles.settings,
    link: AppNavigationLinks.settings,
  },
};

export const availableCategories: IStringArray = {
  newsAPI: [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ],
};

export const availableSources: IStringArray = {
  newsAPI: [
    "The Washington Post",
    "NBC News",
    "CNN",
    "CBS Sports",
    "NBC Sports",
    "Reuters",
    "The Guardian US",
    "Pro Football Focus",
    "ESPN",
    "The Associated Press",
    "Bloomberg",
    "BBC.com",
    "Hollywood Reporter",
    "USA TODAY",
    "New York Post ",
    "WOWT",
  ],
};
