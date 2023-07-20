grades = [56, 87, 99, 40];

grades.pop(40);

grades.push(60, 68);

let averageTotal = grades[0] + grades[1] + grades[2] + grades[3] + grades[4];
let average = averageTotal / 4;

console.log(average);

const car = {
    name: "Camaro", 
    year: 2017,
    brand: "Chevy",
    numWheels: 4,
    environmentFriendly: "true"
}

let display = "";

for (let x in car) {
    display += car[x] + " ";
}

document.getElementById("car").innerHTML = display;
