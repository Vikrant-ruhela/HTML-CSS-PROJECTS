let numbers=[12,44,15,26,30,9,6,3];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]%2!=0) {
        if (numbers[i]%3==0) {
            console.log(numbers[i]);
        }
    }
    continue;
}
 