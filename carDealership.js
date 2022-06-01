const Car = function (manufacturer, price, engineType) {
    
    let _manufacturer = manufacturer;
    let _price = price;
    let _engineType = engineType;

    // Most verbose way of writing an anonymous function
    this.getManufacturer = function(){
        return manufacturer;
    }
    // Anoymous function with syntatic sugar from ES6
    this.getPrice = () => {
        return price;
    }
    // Anonymous function fully abbreviated
    this.getEngineType = () => engineType;
    

}