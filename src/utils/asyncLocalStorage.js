const AsyncLocalStorage = {
  setItem: function (key, value) {
    return Promise.resolve().then(function () {
      localStorage.setItem(key, value);
    });
  },
  getItem: function (key) {
    return Promise.resolve().then(function () {
      console.log(JSON.parse(localStorage.getItem(key)));
      return JSON.parse(localStorage.getItem(key));
    });
  },
};

export default AsyncLocalStorage;
