import  bubbleSort from '../../sort/ts/bubbleSort';

function main(): void {
    let list: number[] = (new Array(100000)).fill(0);

    // Fill the array with random numbers
    list.map((e, i) => list[i] = Math.round(Math.random() * 100000));

    // Sort the list
    console.time('sorting');
    list = bubbleSort(list);
    console.timeEnd('sorting');

    logList(list);
}

const logList = function (l: number[]): void {
    let size = l.length;
    if (size <= 50) console.log(l)
    else {
        console.log("Elementos do inicio da lista")
        for (let i = 0; i < 10; i++) {
            console.log(l[i]);
        }
        
        console.log("Elementos do fim da lista")
        for (let i = size - 1; i > size - 10; i--) {
            console.log(l[i]);
        }
    }
}

main();