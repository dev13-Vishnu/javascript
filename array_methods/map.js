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
//1. Get an array of all names.

let names = characters.map(char=>char.name);

console.log(names);

//2.Get an array of all Heights

let heights = characters.map(char=> char.height);

console.log(heights);

//3. Get an array of objects with just name and height properties.

let nameAndHeight = characters.map(char=> ({
    name: `${char.name}`,
    hieght: `${char.height}`
}))

console.log(nameAndHeight);

//4.Get an array of all first names

let firstNames = characters.map(char=>(char.name.split(" "))[0])
console.log(firstNames)