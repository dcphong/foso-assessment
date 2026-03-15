export const EXCHANGE_RATE: Record<string, number> = {
  en: 1,
  vi: 26322.72
};

export const CURRENCY_SYMBOL: Record<string, string> = {
  en: "$",
  vi: "k"
};

export const exchangeRate = (amount: number, locale: string) =>
  amount * EXCHANGE_RATE[locale]!;

export const currencySymbol = (locale: string) =>
  CURRENCY_SYMBOL[locale] || CURRENCY_SYMBOL["en"];
