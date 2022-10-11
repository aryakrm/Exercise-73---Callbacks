function printAsyncName(name, callbackFunction) {
  setTimeout(() => {
    console.log(name);
  }, 2000);
  setTimeout(() => {
    callbackFunction;
  }, 1000);
}

callback = () => console.log("hello");
printAsyncName("Arya", callback());
