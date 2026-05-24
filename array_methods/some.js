const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

//1. Is there at least one male character ?
let leastOneMale = characters.some((char)=> char.gender==="male");

console.log("Is there at least one male character? ", leastOneMale);

//2. Is there  at least one character with blue eyes.

let leastOneBlueEyes = characters.some((char)=>char.eye_color);

console.log("Is there at least one character with blue eyes? ", leastOneBlueEyes);
