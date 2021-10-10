import tribonacciFile = require('./tribonacci.sequence');

describe('Tests for Tribonacci sequence', () => 
{
    test('It should receive [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]', () => 
    {
        expect(tribonacciFile.tribonacci([1, 1, 1], 10)).toStrictEqual('[1, 1, 1, 3, 5, 9, 17, 31, 57, 105]');
    });    
});