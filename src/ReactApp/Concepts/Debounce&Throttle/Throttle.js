function throttle(fn, delay) {
  let canRun = true;

  return function (...args) {
    if (!canRun) return;

    fn(...args);

    canRun = false;

    setTimeout(() => {
      canRun = true;
    }, delay);
  };
}

export default throttle;
