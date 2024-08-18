import { createContext } from "react";
import { IUserSettingsContext, IUserSettings } from "./interfaces";

export const defaultUserSettings: IUserSettings = {
  interests: ["sports", "technology", "politics"],
};

export const UserSettingsContext = createContext<IUserSettingsContext | null>(
  null
);
