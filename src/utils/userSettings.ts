import { createContext } from "react";
import { IUserSettingsContext, IUserSettings } from "./interfaces";

export const availableCategories_NewsAPI = {
  newAPI: [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ],
};

export const defaultUserSettings: IUserSettings = {
  interests: ["sports", "technology", "politics"],
};

export const UserSettingsContext = createContext<IUserSettingsContext | null>(
  null
);
