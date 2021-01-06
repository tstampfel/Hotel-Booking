import { AppContext } from "../context/appContext";

export default class UserHelper {
  public static getTokenFromHeaders(ctx: AppContext) {
    return ctx.req.headers.authorization?.split(" ")[1];
  }
}
