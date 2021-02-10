export default class CommonAnimation {
  public static buttonCommonVariant = {
    hover: { scale: 1.05, color: "#3ac4fa", background: "transparent" },
    visible: { scale: 0.95 },
  };
  public static buttonTranslateVariant = {
    hover: { scale: 1.05, color: "#F8F9FA", backgroundColor: "#3ac4fa" },
    visible: { scale: 0.95 },
  };
  public static socialSquare(backgroundColor: string) {
    return {
      hover: {
        color: "#ffffff",
        backgroundColor,
        transition: { duration: 0.5 },
      },
      hidden: {
        color: "#111111",
      },
    };
  }

  public static commonOnHover(hoverColor: string) {
    return {
      hover: {
        color: hoverColor,
      },
    };
  }
}
