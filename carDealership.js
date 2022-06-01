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
    module.exports = {getEngineType, car1};
}

const car1 = new Car("Ford", 200000, "V-8");
console.log("car1 engine type:", car1.getEngineType());


