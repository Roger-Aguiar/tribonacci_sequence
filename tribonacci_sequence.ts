export function tribonacci([a, b, c]: [number, number, number], n: number): number[] 
{
    let tribonacciSequence = [a, b, c]
    if(n == 0)
    {
        return [];
    }
    else
    {
        for (let index = tribonacciSequence.length - 1; index < n - 1; index++) 
        {
            tribonacciSequence.push(tribonacciSequence[index] + tribonacciSequence[index - 1] + tribonacciSequence[index - 2]);
        }
        return tribonacciSequence;
    }
}

let tribonacciSequence = tribonacci([150, 90, 230], 10);
console.log(tribonacciSequence);