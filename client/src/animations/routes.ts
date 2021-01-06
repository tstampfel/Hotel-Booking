export default class RoutesAnimations {
  public static routeVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 0.5 },
    },
    exit: {
      x: "-150vw",
      transition: { duration: 0.4 },
    },
  };
  public static carouselVariant = {
    hidden: {
      x: "150vw",
    },
    visible: {
      x: "0vw",
      transition: { delay: 0.5, duration: 0.4 },
    },
    exit: {
      x: "-150vw",

      transition: { duration: 0.4 },
    },
  };
}
