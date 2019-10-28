const itemGet = key => JSON.parse(localStorage.getItem(key));
const itemSet = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const checkForIn = fn => {
  const flag = fn();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag) {
        return resolve(flag);
      }
      return reject(flag);
    }, 250);
  });
};

const store = (key, value) => {
  const flag = itemGet(`${key}`);
  return checkForIn(() => flag)
    .then(() => (flag === value ? true : itemSet(`${key}`, value)))
    .catch(() => itemSet(`${key}`, value));
};
const getStore = async key => {
  const flag = await itemGet(`${key}`);
  const r = fn =>
    checkForIn(() => flag)
      .then(() => fn(flag))
      .catch(() => fn(false));
  const result = await r(data => data);

  return result;
};

export { checkForIn, store, itemGet, itemSet, getStore };
