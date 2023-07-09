const setItem = (key, value) => {
  sessionStorage.setItem(key, value);
};

const getItem = (key) => sessionStorage.getItem(key);

const removeItem = (key) => {
  sessionStorage.removeItem(key);
};

const clearStorage = () => {
  sessionStorage.clear();
};

const storageHelper = {
  setItem,
  getItem,
  removeItem,
  clearStorage,
};

export default storageHelper;
