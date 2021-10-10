"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tribonacci = void 0;
function tribonacci(_a, n) {
    var a = _a[0], b = _a[1], c = _a[2];
    var tribonacciSequence = [a, b, c];
    switch (n) {
        case 0:
            return [];
        case 1:
            return [a];
        case 2:
            return [a, b];
        case 3:
            return tribonacciSequence;
        default:
            for (var index = tribonacciSequence.length - 1; index < n - 1; index++) {
                tribonacciSequence.push(tribonacciSequence[index] + tribonacciSequence[index - 1] + tribonacciSequence[index - 2]);
            }
            return tribonacciSequence;
    }
    /*if(n == 0)
    {
        return [];
    }
    else if(n == 1)
    {
        return  [a];
    }
    else if(n == 2)
    {
        return [a, b];
    }
    else if(n == 3)
    {
        tribonacciSequence;
    }
    else
    {
        for (let index = tribonacciSequence.length - 1; index < n - 1; index++)
        {
            tribonacciSequence.push(tribonacciSequence[index] + tribonacciSequence[index - 1] + tribonacciSequence[index - 2]);
        }
        return tribonacciSequence;
    }*/
}
exports.tribonacci = tribonacci;
var tribonacciSequence = tribonacci([14, 14, 7], 2);
console.log(tribonacciSequence);
//# sourceMappingURL=tribonacci.sequence.js.map