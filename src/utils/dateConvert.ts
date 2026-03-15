export const convertDate = (date: number, t: (key: string) => string) => {
  if (!date) return t("undefined");

  const now = Date.now();
  const differentSeconds = Math.floor((now - date) / 1000);

  if (differentSeconds < 60) return t("justNow");

  const minutes = Math.floor(differentSeconds / 60);
  if (minutes < 60) return `${minutes} ${t("minute")}`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} ${t("hour")}`;

  const days = Math.floor(hours / 24);
  return `${days} ${t("day")}`;
};
