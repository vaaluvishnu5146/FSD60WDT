const print = (num = 0, callback = () => {}) => {
  setTimeout(() => {
    console.log(num);
  }, 1000);
  callback();
};

print(0, () =>
  print(1, () => print(2, () => print(3, () => print(4, () => print(5)))))
);
