export default class ServerUtils {
  public static whitelist = [
    "http://localhost:3000",
    "http://localhost:4000",
    "http://localhost:8080",
    "https://hotel-booking-tomek.herokuapp.com",
  ];

  public static corsOptions = {
    origin: function (origin: any, callback: any) {
      console.log("** Origin of request " + origin);
      if (ServerUtils.whitelist.indexOf(origin) !== -1 || !origin) {
        console.log("Origin acceptable");
        callback(null, true);
      } else {
        console.log("Origin rejected");
        callback(new Error("Not allowed by CORS"));
      }
    },
  };
}
