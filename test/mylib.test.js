const { expect } = require("chai");
const mylib = require("../mylib");

describe("mylib arithmetic functions", function () {

    //run once before all test
    before(function () {
        console.log("Starting mylib tests...");
    });

    //Addition
    it("should add two numbers correctly", function () {
        expect(mylib.add(10,5)).to.equal(15);
    });

    //Substraction
    it("should substract two numbers correctly", function () {
        expect(mylib.subtract(10,5)).to.equal(5);
    });

    //Multiplication
    it("should multiply two numbers correctly", function () {
        expect(mylib.multiply(10,5)).to.equal(50);
    });

    //Division
    it("should divide two numbers correctly", function () {
        expect(mylib.divide(10,5)).to.equal(2);
    });

    //Division by zero
    it("should throw an error when dividing by zero", function () {
        expect(() => mylib.divide(10,0)).to.throw("Cannot divide by zero");
    });

    //run once after all tests
    after(function () {
        console.log("Finished mylib tests.");
    });
});