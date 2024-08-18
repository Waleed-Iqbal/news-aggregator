export interface ILinkTitle {
  link: string;
  title: string;
}

export interface IPageInfo {
  [key: string]: ILinkTitle;
}

export interface IString {
  [key: string]: string;
}

export interface IUserSettings {
  interests: string[];
}

export type IUserSettingsContext = {
  userSettings: IUserSettings;
  setUserSettings: (settings: IUserSettings) => void;
};

export interface INewsArticle {
  // Define the properties of the INewsArticle interface here
}

export interface INewsArticle {
  source: {
    id: string;
    name: string;
  };
  url: string;
  title: string;
  author: string;
  content: string;
  urlToImage: string;
  description: string;
  publishedAt: string;
}

export interface INewsAPIResponse {
  status: string;
  totalResults: number;
  articles: INewsArticle[];
}
