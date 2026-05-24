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

//1. Does every charecter has blue eyes. 

let blueEyes= characters.every((char)=>char.eye_color=="blue")

console.log("Does every character has blue eyes:", blueEyes);

//2. Does every character has mass more than 40;

let massMT40 = characters.every((char)=> char.mass > 40);

console.log("Does every charecter has mass more than 40:", massMT40);

//3. Is every charecter shorter than 200;

let shorter200 = characters.every((char)=> characters.height < 200);

console.log("Is every character shorter than 200:", shorter200);


//4. Is every character male?

let isAllMale = characters.every((char)=> char.gender === "male");

console.log("Is every character Male:", isAllMale);

