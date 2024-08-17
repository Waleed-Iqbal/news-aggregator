export interface IPageInfo {
  [key: string]: {
    link: string;
    title: string;
  };
}

export interface IString {
  [key: string]: string;
}

export interface IUserSettings {
  interests: string[];
}

export type IUserSettingContext = {
  userSettings: IUserSettings;
  setUserSettings: (settings: IUserSettings) => void;
};
