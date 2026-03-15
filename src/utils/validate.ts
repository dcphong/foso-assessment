export const getStoredCart = (key: string): any[] => {
  try {
    const data = window.localStorage.getItem(key);
    if (!data) return [];
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    return [];
  }
};
