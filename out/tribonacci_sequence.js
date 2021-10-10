"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tribonacci = void 0;
function tribonacci(_a, n) {
    var a = _a[0], b = _a[1], c = _a[2];
    var tribonacciSequence = [a, b, c];
    if (n == 0) {
        return [];
    }
    else {
        for (var index = tribonacciSequence.length - 1; index < n - 1; index++) {
            tribonacciSequence.push(tribonacciSequence[index] + tribonacciSequence[index - 1] + tribonacciSequence[index - 2]);
        }
        return tribonacciSequence;
    }
}
exports.tribonacci = tribonacci;
var tribonacciSequence = tribonacci([150, 90, 230], 10);
console.log(tribonacciSequence);
//# sourceMappingURL=tribonacci_sequence.js.map