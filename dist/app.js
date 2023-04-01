"use strict";
class Vehicle {
    constructor(make, model, year, rented) {
        this.message = '';
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    get getVehicle() {
        return this.make;
    }
    set setVehicle(make) {
        this.make = make;
    }
    get getModel() {
        return this.model;
    }
    set setModel(model) {
        this.model = model;
    }
    get getYear() {
        return this.year;
    }
    set setYear(year) {
        this.year = year;
    }
    get getRented() {
        return this.rented;
    }
    set setRented(rented) {
        this.rented = rented;
    }
    rent() {
        if (!this.rented) {
            this.message = `The ${this.make + " " + this.model + " year " + this.year} is already rented`;
            return this.message;
        }
        else {
            this.rented = true;
        }
    }
    return() {
        if (!this.rented) {
            this.message = `The ${this.make + " " + this.model + " year " + this.year}  is already rented`;
            this.rented = false;
            return this.message;
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, rented, noOfSeats) {
        super(make, model, year, rented);
        this.noOfSeats = noOfSeats;
    }
    rentalRate() {
        return 4000;
    }
    set setNoOfSeats(seats) {
        this.noOfSeats = seats;
    }
    get getNoOfSeats() {
        return this.noOfSeats;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, rented, load) {
        super(make, model, year, rented);
        this.load = load;
    }
    rentalRate() {
        return 5000;
    }
    set setLoad(load) {
        this.load = load;
    }
    get getload() {
        return this.load;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, rented, enginePower) {
        super(make, model, year, rented);
        this.enginePower = enginePower;
    }
    rentalRate() {
        return 500;
    }
    set setEnginePower(enginePower) {
        this.enginePower = enginePower;
    }
    get getEnginePower() {
        return this.enginePower;
    }
}
const testCar = new Car("Honda", "Civic", 2023, true, 6);
console.log(testCar.rent()); //Not show any message only make rented true
console.log(testCar.return()); // Can't meet the condition in main method
const testTruck = new Truck("Ghandara Industries", "2020", 2023, false, "1000kg");
console.log(testTruck.rent()); //Show  message  (The Ghandara Industries 2020 year 2023  is already rented)
console.log(testTruck.return()); //Show  message  (The Ghandara Industries 2020 year 2023  is already rented) 
const testMotorcycle = new Motorcycle("United Auto Industries", "United", 2023, false, "70Cc");
console.log(testMotorcycle.rent()); //Show Message (The United Auto Industries United year 2023  is already rented)
console.log(testMotorcycle.return()); // Show Message (The United Auto Industries United year 2023  is already rented)
//# sourceMappingURL=app.js.map