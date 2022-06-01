const carDealership = require('./carDealership');

describe("Can access all properteis from Car", () => {
    test("Check if we can get car manufacturer", () => {
        const actual = carDealership.car1.getManufacturer();
        const expected = "Ford";
        expect(actual).toBe(expected);
    });
    test("Check if we can get car price", () => {
        const actual = carDealership.car1.getPrice();
        const expected = 200000;
        expect(actual).toBe(expected);
    });
    test("Check if we can get car engine type", () => {
        const actual = carDealership.car1.getEngineType();
        const expected = "V-8";
        expect(actual).toBe(expected);
    });
});