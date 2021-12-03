const bubbleSort = (list: number[]): number[] => {
    let n = list.length, end = n;
    for (let i = 0; i < n - 1; i++) {
        for (let k = 1; k < end - 1; k++) {
            if (list[k] > list[k+1]) {
                let aux = list[k];
                list[k] = list[k+1];
                list[k+1] = aux;
            }
        }
        end--;
    }
    return list;
}

export default bubbleSort;