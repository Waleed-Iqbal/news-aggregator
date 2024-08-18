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
