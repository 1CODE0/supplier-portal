// src/utils/cookieUtils.ts
import Cookies from "js-cookie";
import themeConfig from "../contexts/themeConfig";
import { Settings } from "../contexts/settingsContext";
import { Mode, SystemMode } from "../contexts/types";

const COOKIE_NAME = themeConfig.settingsCookieName;

/** Read your serialized Settings object from cookie */
export function getSettingsFromCookie(): Settings {
  const raw = Cookies.get(COOKIE_NAME);
  if (!raw) return {};
  try {
    return JSON.parse(raw) as Settings;
  } catch {
    console.warn("Failed to parse settings cookie:", raw);
    return {};
  }
}

/** Return the app’s configured mode or fallback */
export function getMode(): Mode {
  const settings = getSettingsFromCookie();
  return settings.mode || themeConfig.mode;
}

/** Return the system/browser color-scheme or the user’s fallback */
export function getSystemMode(): SystemMode {
  const mode = getMode();
  // read a separate “colorPref” cookie or default to light
  const colorPref = Cookies.get("colorPref") as SystemMode | undefined;
  const browserPref: SystemMode = colorPref ?? "light";
  return mode === "system" ? browserPref : mode;
}

/** Final calc: if “system” is selected, use system; else use user choice */
export function getEffectiveMode(): SystemMode {
  const mode = getMode();
  const system = getSystemMode();
  return mode === "system" ? system : mode;
}

/** Read your “skin” setting (or default) */
export function getSkin(): string {
  const settings = getSettingsFromCookie();
  return settings.skin || "default";
}

/**
 * Optionally: write a new Settings object back into the cookie
 * you’ll want to serialize, set expiration, etc.
 */
export function setSettingsCookie(
  settings: Settings,
  options?: Cookies.CookieAttributes
) {
  Cookies.set(COOKIE_NAME, JSON.stringify(settings), {
    expires: 365,
    sameSite: "lax",
    ...options,
  });
}
