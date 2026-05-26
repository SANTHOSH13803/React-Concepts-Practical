function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return (...next) => curried(...args, ...next);
  };
}

const fn = curry((a, b, c) => a + b + c);
console.log(fn);

function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  console.log("Hi");
};

const u = new User("Santhosh");

u.sayHi();
