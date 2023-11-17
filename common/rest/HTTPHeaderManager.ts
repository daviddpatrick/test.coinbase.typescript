import { UserSessionAuthData } from "./UserSessionAuthData";

export type RestHeaders = {
  "Content-type": string;
  withCredentials: boolean;
};
export const contentTypeFormData = "application/x-www-form-urlencoded";
export class HTTPHeaderManager {
  public static getHeaders(userSessionAuthData: UserSessionAuthData, isFormData?: boolean): RestHeaders {
    const content = isFormData ? contentTypeFormData : "application/json";
    return {
      "Content-type": content,
      withCredentials: true,
    };
  }
}
