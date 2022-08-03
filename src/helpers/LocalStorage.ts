export const setStorageItem = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getStorageItem = (key: string, defaultValue: string = "") => {
  return localStorage.getItem(key) || defaultValue;
};

export const removeStorageItem = (key: string) => {
  localStorage.removeItem(key);
};
