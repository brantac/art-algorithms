# Selection Sort
Selection Sort is a selection algorithm, which searches for the greatest
(or the smallest element) at each step and place it in its final
position. This algorithm has a complexity of O(n²), just because it needs
to loop the entire list for n - 1 times.

```
selectionSort(A)
    n <-- nA; end <-- n;
    for i from 1 to (n-1) repeat
        pos <-- 1;
        for k from 2 to end repeat
            if (A[k] > A[pos]) then pos <-- k;
        if (pos != end)
            then    aux <-- A[end];
                    A[end] <-- A[pos];
                    A[pos] <-- aux;
        end <-- end - 1;
```