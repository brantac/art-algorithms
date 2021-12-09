import  bubbleSort from '../../sort/ts/bubbleSort';
import insertionSort from '../../sort/ts/insertionSort';

function main(): void {
    let listB: number[] = (new Array(50000)).fill(0);
    let listA: number[] = (new Array(50000)).fill(0);

    // Fill the arrays with random numbers
    listA.map((e, i) => listA[i] = Math.round(Math.random() * 100000));
    listB.map((e, i) => listB[i] = Math.round(Math.random() * 100000));

    // Sort lists
    console.time('sort-list-a')
    bubbleSort(listA);
    console.timeEnd('sort-list-a');
    console.time('sort-list-b');
    insertionSort(listB);
    console.timeEnd('sort-list-b')

    // Log lists
    logList(listA, 'A');
    logList(listB, 'B');
}

const logList = function (l: number[], name: string): void {
    let size = l.length;
    console.log(`List ${name}`);
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

const isOrdered = (list: number[], ascending: boolean): boolean => {
    let ordered = true;
    let i = 0;

    if (ascending) {
        while (i <= list.length - 2 && ordered) {
            if (list[i] > list[i+1]) ordered = false;
            else i++;
        };
    }
    else {
        while (i <= list.length - 2 && ordered) {
            if (list[i] < list[i + 1]) ordered = false;
            else i--;
        };
    }
    
    return ordered;
}

main();