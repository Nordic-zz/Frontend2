

const objArr = [
    {
        fullname: 'Peter Fulham',
        age: 29,
        height: 201,
    },
    {
        fullname: 'Nick Carter',
        age: 69,
        height: 231,
    },
    {
        fullname: 'Li Lee',
        age: 9,
        height: 125,
    },
];

const objArr2 = [
    {
        fullname: 'Elizabeth Cunningham',
        age: 54,
        height: 168,
    },
    {
        fullname: 'Grefve Hilding af Silfverstierna',
        age: 89,
        height: 178,
    },
    {
        fullname: 'Joe Doe',
        age: 19,
        height: 203,
    },
    {
        fullname: 'Clas Svensson',
        age: 44,
        height: 198,
    },
];


objArr2.push(...objArr);

const objArr3 = objArr2.filter(person =>
    person.height > 200
);

console.log('- Övning 1 -');

objArr3.forEach(person =>
    console.log(person)
);

console.log(`
- Övning 2 -`);
for (let i = 0; i < 5; i++){
    switch(i){
        case 0:
            console.log("Nisse");
            break;
        case 1:
            console.log("Per");
            break;
        case 2:
            console.log("Johannes");
            break;
        case 3:
            console.log("Joakim");
            break;
        default:
            console.log("Hans");
    }
}

console.log(`
- Övning 3 -`);
for (let i = 0; i < 21; i++){
    switch(i){
        case 0:
            console.log("Umeå");
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log("Stockholm");
            break;
        case 6:
        case 7:
        case 8:
        case 9:
            console.log("Mora");
            break;
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
            console.log("Västerås");
            break;
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            console.log("Göteborg");
            break;
        default:
            console.log("Malmö");
    }
}
