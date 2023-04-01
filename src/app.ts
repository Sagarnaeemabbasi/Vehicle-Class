abstract class Vehicle {

    public make: string;
    public model: string;
    public year: number;
    public rented: boolean   // If not rented(available) return true ,if rented return false(not available)
    message: string = '';

    constructor(make: string, model: string, year: number, rented: boolean) {
        this.make = make
        this.model = model
        this.year = year;
        this.rented = rented
    }
    get getVehicle() {
        return this.make;
    }
    set setVehicle(make: string) {
        this.make = make;
    }

    get getModel() {
        return this.model;
    }
    set setModel(model: string) {
        this.model = model;
    }

    get getYear() {
        return this.year;
    }
    set setYear(year: number) {
        this.year = year;
    }

    get getRented() {
        return this.rented;
    }
    set setRented(rented: boolean) {
        this.rented = rented;
    }
    abstract rentalRate(rent: number): number;

    rent() {
        if (!this.rented) {
            this.message = `The ${this.make + " " + this.model + " year " + this.year} is already rented`
            return this.message;
        }
        else {
            this.rented = true
        }
    }
    return() {
        if (!this.rented) {
            this.message = `The ${this.make + " " + this.model + " year " + this.year}  is already rented`
            this.rented = false;
            return this.message;
        }

    }

}

class Car extends Vehicle {
    constructor(make: string, model: string, year: number, rented: boolean, public noOfSeats: number) {
        super(make, model, year, rented);
    }
    rentalRate(): number {
        return 4000
    }
    set setNoOfSeats(seats: number) {
        this.noOfSeats = seats;
    }
    get getNoOfSeats() {
        return this.noOfSeats;
    }
}

class Truck extends Vehicle {
    constructor(make: string, model: string, year: number, rented: boolean, public load: string) {
        super(make, model, year, rented);
    }
    rentalRate(): number {
        return 5000
    }
    set setLoad(load: string) {
        this.load = load;
    }
    get getload() {
        return this.load;
    }
}

class Motorcycle extends Vehicle {
    constructor(make: string, model: string, year: number, rented: boolean, public enginePower: string) {
        super(make, model, year, rented);
    }
    rentalRate(): number {
        return 500
    }
    set setEnginePower(enginePower: string) {
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
console.log(testTruck.return());  //Show  message  (The Ghandara Industries 2020 year 2023  is already rented) 

const testMotorcycle = new Motorcycle("United Auto Industries", "United", 2023, false, "70Cc");
console.log(testMotorcycle.rent()); //Show Message (The United Auto Industries United year 2023  is already rented)
console.log(testMotorcycle.return()); // Show Message (The United Auto Industries United year 2023  is already rented)