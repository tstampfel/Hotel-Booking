export default class BookingAnimations {
  public static bookingicon = {
    hover: {
      color: "#ffffff",
      backgroundColor: "#3ac4fa",
      borderColor: "#3ac4fa",
      transition: { duration: 0.2 },
    },
  };
  public static bookingChevron = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
}
