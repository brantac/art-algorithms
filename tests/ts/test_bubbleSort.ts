import  bubbleSort from '../../sort/ts/bubbleSort';

function main(): void {
    let list: number[] = (new Array(50000)).fill(0);
    // Fill the array with random numbers
    list.map(() => Math.random() * 100000);
    list = bubbleSort(list);
    console.log(list);
}

main();