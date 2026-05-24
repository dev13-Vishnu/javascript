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
    // {
    //     name: 'Anakin Skywalker',
    //     height: '188',
    //     mass: '184',
    //     eye_color: 'blue',
    //     gender: 'male',
    // },
];

//1. Get charecter with mass greater than 100

let massGT100 = characters.filter((char)=> Number(char.mass) > 100);

console.log("mass greater than 100:",massGT100);

//2. Get charecters with height less than 200

let heightLT200 = characters.filter((char)=> Number(char.height) < 200);

console.log("Height less than 200:",heightLT200)

// 3. Get all male Charecters

let allMaleChar = characters.filter((char)=> char.gender ==='male');

console.log("All Male Charecters:",allMaleChar);

//4. Get all female charecters

let allFemaleChar = characters.filter((char)=> char.gender ==='female');

console.log("All Female Charecters:",allFemaleChar);

