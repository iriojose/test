
export const fibonacci = (sequence) => {
    if(sequence < 3) return 1
    return fibonacci(sequence - 1) + fibonacci(sequence - 2)
}

export const counteWords = (words) => {
    let array = words.split(/[\s\.,]+/g);
    return array.reduce((ant, e) => ant.set(e, (ant.get(e) || 0) + 1), new Map());
}

export const replaceSequence = () => {
    let array = [...Array(100)].map((_, i) => i+1);
    return array.map(a => {
        if (a % 5 == 0 && a % 3 == 0) return 'fizz buzz'
        else if(a % 3 == 0) return 'fizz'
        else if(a % 5 == 0) return 'buzz'
        else return a
    });
}   

console.log(fibonacci(6));
console.log(counteWords("hola hola hola como estas? estas? estas? bien y tu estas bien?"));
console.log(replaceSequence());


