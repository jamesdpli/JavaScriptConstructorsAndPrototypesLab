const carDealership = require('./carDealership');

describe("Can get car manufacturer", () => {
    test("Check if we can get car manufacturer", () => {
        const actual = carDealership
        const expected = "V-8";
        expect(actual).toBe(expected);
    })
});