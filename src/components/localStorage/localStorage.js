export const getItem = () => {
  const storedItems = localStorage.getItem("bookmarks");

  if (storedItems) {
    return JSON.parse(storedItems);
  }
  return [];
};

export const setItemLS = (value) => {
  const storedData = getItem();
  storedData.push(value);
  return storeInLS(storedData);
};

const storeInLS = (value) => {
  return localStorage.setItem("bookmarks", JSON.stringify(value));
};

// const clearLS = () => {
//   return localStorage.clear();
// };

export const removeItem = () => {
  localStorage.removeItem("bookmarks");
  return window.location.reload();
};
