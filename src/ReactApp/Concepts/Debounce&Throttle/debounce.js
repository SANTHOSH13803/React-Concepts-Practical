function debounce(fn, delay) {
  let timer = null;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const fetchUsers = () => {
  // assume this as api
  // returns data

  return [1, 2, 3, 4];
};
const debouncedSearch = debounce((value) => {
  const users = fetchUsers(value);
  console.log(users);
}, 500);

console.log(debouncedSearch);
