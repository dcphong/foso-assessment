export const getDaysUntilWeekend = (t: (key: string) => string) => {
  const days = [];
  const now = new Date();
  const currentDayOfWeek = now.getDay();

  const start = currentDayOfWeek === 0 ? 7 : currentDayOfWeek;

  for (let i = start; i <= 7; i++) {
    const nextDate = new Date();
    nextDate.setDate(now.getDate() + (i - start));

    const dayOfMonth = nextDate.getDate().toString().padStart(2, "0");
    const month = (nextDate.getMonth() + 1).toString().padStart(2, "0");

    days.push({
      dayName: i === 7 ? t("sunday") : `${t("thursday_prefix")} ${i + 1}`,
      dateStr: `${dayOfMonth}/${month}`,
      timestamp: nextDate.setHours(0, 0, 0, 0)
    });
  }
  return days;
};
