export function tribonacci([a, b, c], n) 
{
    let tribonacciSequence = [a, b, c]

    switch (n) 
    {
        case 0:
            return [];
        case 1:
            return [a];            
        case 2:
            return [a, b];
        case 3:
            return tribonacciSequence;
        default:
            for (let index = tribonacciSequence.length - 1; index < n - 1; index++) 
            {
                tribonacciSequence.push(tribonacciSequence[index] + tribonacciSequence[index - 1] + tribonacciSequence[index - 2]);
            }
            return tribonacciSequence;            
    }    
}
