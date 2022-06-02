"use strict";

const Car = function (manufacturer, price, engineType) {
    
    let _manufacturer = manufacturer;
    let _price = price;
    let _engineType = engineType;

    // Most verbose way of writing an anonymous function
    this.getManufacturer = function(){
        return _manufacturer;
    }
    // Anoymous function with syntatic sugar from ES6
    this.getPrice = () => {
        return _price;
    }
    // Anonymous function fully abbreviated
    this.getEngineType = () => _engineType;
}

// New up some cars
const car1 = new Car("Ford Fiesta", 200000, "V-8");
const car2 = new Car("Toyota Prius", 10000, "Super charged V-8");
const car3 = new Car("Volkswagen Polo", 30000, "1.2l");
const car4 = new Car("Lexus ls250", 500000, "2.9l");
const car5 = new Car("Dacia Duster", 90000, "Super charged V-8");
const car6 = new Car("Toyota Auris", 300, "Twin turbo");
const car7 = new Car("Toyota Avensis", 2020202, "CrazyFastEngine");

const Dealership = function (title, maximumNumberOfCars, carsInStock) {

    let _title = title;
    let _maximumNumberOfCars = maximumNumberOfCars;
    let _carsInStock = carsInStock;

    this.getTitle = () => title;
    this.getMaximumNumberOfCars = () => maximumNumberOfCars;
    this.carsInStock = () => carsInStock;

    this.countNumberOfCarsInStock = () => carsInStock.length;
    this.addCarToStock = function (manufacturer, price, engineType) {
        carsInStock.push(new Car(manufacturer, price, engineType));
    }
    this.getAllCarManufacturers = function () {
    }
}

// New up some dealerships
const dealership1 = new Dealership("Jimmy's Best Cars", 20, [car1, car2, car7, car5]);

console.log(dealership1.countNumberOfCarsInStock());
dealership1.addCarToStock("Su", 10, "su");
console.log(dealership1.countNumberOfCarsInStock());
console.log(dealership1.carsInStock());
console.log(dealership1.getAllCarManufacturers());

module.exports = {car1, car2, car3, car4, car5, car6, car7}