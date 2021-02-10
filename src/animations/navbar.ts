export default class NavBarAnimations {
  public static linkVariant = {
    hidden: { color: "#151515" },
    visible: { scale: 1.1 },
  };
  public static registerButtonRegister = {
    hover: { scale: 1.05, color: "#F8F9FA", backgroundColor: "#3ac4fa" },
    visible: { scale: 0.95 },
  };
  public static socials = (buttonColor: string = "#F8F9FA") => {
    return { hover: { scale: 1.5, color: buttonColor } };
  };
  public static marineBlueOverPain = {
    hover: { color: "#1A355B" },
  };
}
