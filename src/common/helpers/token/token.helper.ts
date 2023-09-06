import jwtDecode from "jwt-decode";
import { STORAGE_KEY } from "../../../consts/storage/storage.keys";
import { secondsToDate } from "../date/dates.helper";
import { TokenJwt } from "../../../models/common/token/token";

export const getTokenJwt = (): string | null =>
  window.localStorage.getItem(STORAGE_KEY.TOKEN);

export const setTokenInLocaltorage = (token: string): void => {
  window.localStorage.removeItem(STORAGE_KEY.TOKEN);
  window.localStorage.setItem(STORAGE_KEY.TOKEN, token);
};

export const decodeJwt = (): TokenJwt => {
  const token = getTokenJwt();

  if (!token) return {} as TokenJwt;

  const decodedToken = jwtDecode(token) as any;

  return {
    expires: secondsToDate(decodedToken.exp),
    role: decodedToken.role,
    userId: decodedToken.userId,
  };
};
