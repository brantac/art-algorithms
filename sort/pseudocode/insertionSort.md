# Insertion Sort
You guessed it right! Insertion Sort is an insertion sort algorithm.

It is an O(n²) algorithm, which means it is very expensive to run it
in very long lists. For example, in a list with 50K integers in
JavaScript, it can take around 4 seconds to run finish the sorting.
With 100K (or the double of the previous list size) elements, it takes 24
seconds in average to complete the sorting (or 6 times slower).

```
insertionSort(A)
    n <-- nA;
    for i from 2  to n repeat
        new <-- A[i]; k <-- i - 1;
        while (aux < A[k]) do
            A[k + 1] <-- A[k];
            k <-- k - 1;
        A[k + 1] <-- new;
```