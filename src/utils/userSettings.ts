import { createContext } from "react";

import { IUserSettingsContext, IUserSettings } from "./interfaces";

import { availableCategories, availableSources } from "./content";

import { getRandomValuesFromAnArray } from "./helpers";

export const defaultUserSettings: IUserSettings = {
  pageSize: 20,
  sources: getRandomValuesFromAnArray(availableSources.newsAPI, 3),
  categories: getRandomValuesFromAnArray(availableCategories.newsAPI, 3),
};

export const UserSettingsContext = createContext<IUserSettingsContext>({
  userSettings: defaultUserSettings,
  setUserSettings: () => {},
});
