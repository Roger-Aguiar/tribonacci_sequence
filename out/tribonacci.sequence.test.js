"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tribonacciFile = require("./tribonacci.sequence");
describe('Tests for Tribonacci sequence', function () {
    test('It should receive [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]', function () {
        expect(tribonacciFile.tribonacci([1, 1, 1], 10)).toStrictEqual('[1, 1, 1, 3, 5, 9, 17, 31, 57, 105]');
    });
});
//# sourceMappingURL=tribonacci.sequence.test.js.map