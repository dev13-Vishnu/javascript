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

//1. Sort by name
let sortedByName = characters.sort((a,b)=> a.name.localeCompare(b.name));

console.log("Sorted by name:", sortedByName);

//2. Sort by mass
let sortedByMass = characters.sort((a,b)=> a.mass - b.mass)

console.log("Sorted by Mass:", sortedByMass);

//3. Sort by height

let sortByHeight = characters.sort((a,b)=> a.height-b.height);

console.log("Sort by height:", sortByHeight);

//4. Sort by gender

let sortByGender = characters.sort((a,b)=> a.gender-b.gender);

console.log("Sort by gender:",sortByGender);


