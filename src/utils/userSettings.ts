import { createContext } from "react";
import { IUserSettingContext, IUserSettings } from "./interfaces";

export const defaultUserSettings: IUserSettings = {
  interests: ["sports", "technology", "politics"],
};

export const UserSettingsContext = createContext<IUserSettingContext | null>(
  null
);
