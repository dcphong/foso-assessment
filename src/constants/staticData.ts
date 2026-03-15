export const comboPackage = (t: (key: string) => string) =>
  Array(4).fill({
    image: 1,
    title: "Perfectly Polished",
    descriptions: t("perfectlyPolished"),
    price: 390
  });

export const medicureDataList = (t: (key: string) => string) =>
  Array(7).fill({
    image: 2,
    title: "Perfectly Polished",
    description: t("perfectlyPolished"),
    price: 390
  });

export const pedicureDataList = (t: (key: string) => string) =>
  Array(7).fill({
    image: 3,
    title: "Perfectly Polished",
    description: t("perfectlyPolished"),
    price: 390
  });

export const effectDataList = (t: (key: string) => string) =>
  Array(7).fill({
    image: 4,
    title: "Perfectly Polished",
    description: t("perfectlyPolished"),
    price: 390,
    type: "effect"
  });
