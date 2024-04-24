function calculator(first: number, second: number, type: string): number {
  switch (type) {
    case "add":
      return first + second;
    case "mul":
      return first * second;
    case "div":
      return first / second;
    case "sub":
      return first - second;
    default:
      throw new Error("Invalid operation type");
  }
}

const result = calculator(5, 10, "mul");
console.log(result);

const small = 1;
const medium = 2;
const large = 3;

// Instrad of this we declare enums

const enum Size {
  small = 1,
  medium = 2,
  large = 3,
}
let mySize: Size = Size.medium;
console.log(mySize);

// interface

interface Person {
  name: String;
  age: Number;
}

function salam(person: Person): string {
  return `Assalamu-alaikum habibi...welcome to dubai ${person.name} you are finally here...So you're now ${person.age}`;
}

const result2 = salam({ name: "haseeb", age: 23 });
console.log(result2);

// Type alias
// Union types
function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    // Type narrowing
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

// Define two interfaces representing diffrent aspects of an object

interface Car {
  brand: string;
  model: string;
  year: string;
  sunroof?: boolean
}

interface Electric {
  batteryCapacity: number;
  chargingTime: string;
}

// Define a new type that combines both Car and Electric interfaces
type ElectricCar = Car & Electric;

function teslaCar(car: ElectricCar) {
  console.log(car);
}

teslaCar({
  brand: "Tesla",
  model: "Model S",
  year: "2024",
  batteryCapacity: 100,
  chargingTime: "1 hour",
  sunroof: true
});

const teslaModelS: ElectricCar = {
  brand: "Tesla",
  model: "Model S",
  year: "2024",
  batteryCapacity: 100,
  chargingTime: "1 hour",
};
