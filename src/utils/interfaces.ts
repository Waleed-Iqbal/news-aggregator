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
export interface IStringArray {
  [key: string]: string[];
}

export interface IUserSettings {
  sources: string[];
  categories: string[];
  numberOfArticles: number;
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
  content: string | null;
  urlToImage: string | null;
  description: string | null;
  publishedAt: string;
}

export interface INewsAPIResponse {
  status: string;
  totalResults: number;
  articles: INewsArticle[];
}

export interface IAPIError {
  message: any;
  isFailed: boolean;
}
