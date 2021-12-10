import  bubbleSort from '../../sort/ts/bubbleSort';
import insertionSort from '../../sort/ts/insertionSort';
import selectionSort from '../../sort/ts/selectionSort';

function main(): void {
    let listA: number[] = (new Array(50000)).fill(0);
    let listB: number[] = (new Array(50000)).fill(0);
    let listC: number[] = (new Array(50000)).fill(0);

    // Fill the arrays with random numbers
    listA.map((e, i) => listA[i] = Math.round(Math.random() * 100000));
    listB.map((e, i) => listB[i] = Math.round(Math.random() * 100000));
    listC.map((e, i) => listC[i] = Math.round(Math.random() * 100000));

    // Sort start
    console.time('sort-list-a')
    bubbleSort(listA);
    console.timeEnd('sort-list-a');

    console.time('sort-list-b');
    insertionSort(listB);
    console.timeEnd('sort-list-b')

    console.time('sort-list-c');
    selectionSort(listC);
    console.timeEnd('sort-list-c')
    // /Sort end

    // Log lists
    logList(listA, 'A');
    logList(listB, 'B');
    logList(listC, 'C');
}

const logList = function (l: number[], name: string): void {
    let size = l.length;
    let list: number[] = [], cont = 0;
    console.log(`--- List ${name} ---`);
    if (size <= 50) console.log(l)
    else {
        // Insert first elements from sorted array
        for (let i = 0; i < 10; i++) {
            list[cont] = l[i];
            cont++;
        }
        // Insert last elements from sorted array
        for (let i = size - 1; i > size - 10; i--) {
            list[cont] = l[i];
            cont++;
        }
    }
    console.log(list);
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