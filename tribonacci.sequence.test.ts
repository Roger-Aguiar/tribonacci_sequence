import {tribonacci} from './tribonacci.sequence';

describe('Tests for Tribonacci sequence', () => 
{
    test('It should return [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]', () => 
    {
        expect(tribonacci([1, 1, 1], 10)).toStrictEqual([1, 1, 1, 3, 5, 9, 17, 31, 57, 105]);
    });    
});