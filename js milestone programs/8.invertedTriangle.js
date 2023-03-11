let char = "*";
let index = 10;

for (let j = 0; j < index; j++) {
  for (let i = j; i < index; i++) {
    process.stdout.write(`${char} `);
  }
  console.log("\n");
}
