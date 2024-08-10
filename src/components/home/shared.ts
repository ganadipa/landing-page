export const getDaysAndNightsText = (days: number) => {
  if (days > 1) {
    const nights = days - 1;
    return days + ` DAYS AND ${nights} ${nights > 1 ? "NIGHTS" : "NIGHT"}`;
  } else {
    return days + " DAY";
  }
};
