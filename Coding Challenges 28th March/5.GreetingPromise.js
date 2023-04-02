function func(name) {
  return new Promise(function exec(resolve) {
    console.log(`Hello,${name}!.`);
  });
}

let Greet = new func("Mithun");
