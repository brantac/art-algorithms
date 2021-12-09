export default function insertionSort(list: number[]): number[] {
    let n = list.length;
        
    for (let i = 1; i < n; i ++) {
        let newElem = list[i];
        let k = i - 1;
        while (newElem < list[k]) {
            list[k + 1] = list[k];
            k--;
        }
        list[k + 1] = newElem;
    }
    return list;
}