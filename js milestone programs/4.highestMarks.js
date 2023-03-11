let marks=[92000,215,1966,43,1000];
let highestMarks=marks[0];

for (let i = 1; i < marks.length; i++) {
    (highestMarks>marks[i])? " " : highestMarks=marks[i];
}

console.log(highestMarks);