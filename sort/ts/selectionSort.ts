const selectionSort = (list: number[]): number[] => {
    let n = list.length, end = n - 1;

    for (let i = 1; i <= n - 1; i++) {
        let pos = 0;
        for (let k = 1; k <= end; k++) {
            if (list[k] > list[pos]) pos = k;
        }
        if (pos != end) {
            let aux = list[end];
            list[end] = list[pos];
            list[pos] = aux;
        }
        end--;
    }
    return list;
}

export default selectionSort;