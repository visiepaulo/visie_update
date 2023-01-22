// map retorna um novo array
const numbersMap = [1, 2, 3, 4, 5];
const doubledNumbers = numbersMap.map((number) => number * 2);
console.log(doubledNumbers);

// filter retorna valores que atendem a condição
const numbersFilter = [1, 2, 3, 4, 5];
const evenNumbers = numbersFilter.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// reduce transforma um array em um valor unico
const numbersReduce = [1, 2, 3, 4, 5];
const sum = numbersReduce.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
);
console.log(sum);
