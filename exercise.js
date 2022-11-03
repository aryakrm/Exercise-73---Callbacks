function printAsyncName(name, callbackFunction) {
  setTimeout(() => {
    console.log(name);
  }, 2000);
  setTimeout(() => {
    callbackFunction;
  }, 1000);
}

const callback = () => console.log("hello");
printAsyncName("Arya", callback());
