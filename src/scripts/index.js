import '../styles/index.scss';

// let cardID = [1,4,5,8,5,3,5,6];
// let car1, car2, theRest;
// [,car1, ...theRest] = cardID;
// console.log(car1, car2, theRest);


// let car = { id: 5000, style: 'convirtible' };
// let id, style;

// ({id, style} = car);


// console.log(id, style);

// function startCars(car1, car2, car3, ...rest) {
//     console.log(car1, car2, car3, rest);
// }

// let carIDs = [1, 2,3,4, 6,7,7];
// startCars(...carIDs);


// console.log( Number.parseFloat("55.45SN55"));


// for(let i = 0; i < 10; i++) {
//     if(i === 5) {
//         console.log("hehe");
//         continue;
//     }
//     console.log(i);
// }


let s1 = "Zoo";
let s2 = "alphabet";

if(s1.toUpperCase() > s2.toUpperCase()) {
    console.log(true);
    console.log(s1.toUpperCase(), s2.toUpperCase());

}
else {
    console.log(false);
    console.log(s1.toUpperCase(), s2.toUpperCase());
}



let mess = "Outside";
if(5 === 5) {
    let mess = "Equal";
    console.log(mess);

}
console.log(mess);



let app =  (function () {
    let carID = 123;
    console.log("in function");
    return {};
}) ();

console.log(app);



let app2 = (function() {
    let carID = 345;
    let getId = function() {
        return carID;
    };
    return {
        getId: getId
    };

})();

console.log(app2.getId());


let hi = {
    nameID: 789,
    getnameID: function() {
        console.log(this);
        return this.nameID;
    }
};
console.log(hi.getnameID());


let he = {
    nameId: 123,
    getNameId: function() {
        return this.nameId;
    }
 };

 let newName = {nameId: 456};
 let newName2 = he.getNameId.bind(newName);
 console.log(newName2());


 function Car(id) {
     this.carId = id;
     this.start = function () {
         console.log("start" + this.carId);
     };
 }

 let vehicle = new Car(456);
 vehicle.start();


 let carIds = [
     { carId: 123, style: "Sedan"},
     { carId: 456 ,style: "Vonve"},
     { carId: 789 ,style: "Truck"},
     { carId: 101, style: "Sprot"},
     { carId: 102 ,style: "SUV"},
 ];

 let jsonIn = `[
    { "carId": 123},
    { "carId": 456},
    { "carId": 789},
    { "carId": 101},
    { "carId": 102}
]`;


console.log(JSON.stringify(carIds));
console.log(carIds);

let carIdsParse = JSON.parse(jsonIn);
console.log(carIdsParse);



carIds.forEach(car => console.log(car));

carIds.forEach((car, index) => console.log(car, index));


let sedan = carIds.every(car => car.carId > 300);

console.log(sedan);


class Car3 {
    constructor(id) {
        this.id = id;
    }

    indentify(suffix) {
        return `Car ID: ${this.id} ${suffix}`;
    }
}

let car4 = new Car3(456);
console.log(car4.indentify('!!'));



class Vehicle {
    constructor() {
        this.type = "Car HEHE";
    }

    start() {
        return `Starting : ${this.type}`;
    }
}

class Car5 extends Vehicle {
    start() {
        return 'in Car start' + super.start();
    }
}

let car6 = new Car5();
console.log(car6.start());
