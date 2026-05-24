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
//1.Get the total mass of all charecters

let mass = characters.reduce((acc,curr)=> acc + Number(curr.mass),0);

console.log('total mass:',mass);

//2.Get the total hieght of all charecters

let height = characters.reduce((acc,curr) => acc + Number(curr.height), 0);

console.log('total height:', height)

//3. get the total number of charecters in all the charecters name

let number = characters.reduce((acc,char)=> acc + char.name.length,0);

console.log(number)

//4.Get the total number of characters by eye color (hint. a map of eye color to count)

let eyeColorCount = characters.reduce((acc, curr)=> {
    const color = curr.eye_color;
    if(!acc[color]) {
        acc[color] = 0
    }
    acc[color]++;
    return acc;
}, {})

console.log("eye color count:", eyeColorCount);

let shortHand = characters.reduce((acc,curr)=> {
    acc[curr.eye_color] = (acc[curr.eye_color ]|| 0) + 1;
    return acc;
}, {})

console.log("short hand solution:",shortHand);