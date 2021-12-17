# Merge Sort
Merge sort is a divide and conquer algorithm, which means that it
divides the whole list in smaller sublists, until we reach the
sublists with only one element, and then we merge them back, putting
the elements in the right order, until we have the original
list sorted.

Merge sort is a recursive algorithm. Its sorting doesn't happen
in-place, because at each step of the merge we need to copy the
elements from sublists to other two other lists in order
to put the elements in the right order.

```
Name: mergeSort
Objective: To order a list of integers
Inputs: A (list of integers), first (index of the first element in A),
        last (index of the last element in A)
Output: nothing
-------------------------
mergesort(A, first, last)
    if (first < last)
        q <-- (first + last) / 2;

        // Sort the first half
        mergesort(A, first, q);
        // Sort the second half
        mergesort(A, q + 1, last);

        // Merge both halves
        merge(A, first, q, last);
-------------------------

// Name: merge
// Objective:   Merge the sublists, where f, m and l are indexes
                that point to first, middle and last positions,
                respectively
// Inputs:  A (list of integers), f (integer), m (integer),
            l (integer)
// Output:  nothing
-----------------
merge(A, f, m, l)
    // Get the size of the left sublist
    // n1 <-- m - f + 1;
    // Get the size of the right sublist
    // n2 <-- l - m;

    // Initialize the size of list B and C to 0
    nB <-- 0; nC <--0;
    
    // Copy the left sublist to B and the right sublist to C
    for i from f to m repeat
        B[nB + 1] <-- A[i]; nB <-- nB + 1;

    for i from (m+1) to l repeat
        C[nC + 1] <-- A[i]; nC <-- nC + 1;
    
    // Copy the elements from B and C back to A, but in the right
    // order
    b <-- 1; c <-- 1;
    for i from f to l repeat
        // If true, copy only elements from list C to A
        if (b > nB)
            then    A[i] <-- C[c];
                    c <-- c + 1;
            else if (c > nC)
                then    A[i] <-- B[b];
                        b <-- b + 1;
                else if (B[b] <= C[c])
                    then    A[i] <-- B[b];
                            b <-- b + 1;
                    else    A[i] <-- C[c];
                            c <-- c + 1;
```