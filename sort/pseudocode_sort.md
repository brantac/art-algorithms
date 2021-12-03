# Sorting algorithms
Sorting algorithms are used to order elements in a list, using a
field as a key to compare each of them. We can order numbers or
alphabets.

## First, let's start with the syntax
Before we start writing any pseudocode, let's go through the syntax
that we're going to be using here.

### List
Lists will be written as a capital letter from the beginning of the
alphabet, like A, B and C.

### The first position is 1, not 0
To make things a little bit simpler, the first position in our
list will be 1, not 0. So, if we want to loop over the entire list,
we have to go from position 1 to 'nA', with 'nA' being the size of
the list A and, consequently, the last position.

Example 1:

```
Name: copyList
Input: A (list of of integers)
Output: B (list of integers)
Pre-conditions: none
-------------
copyList(A,B)
nB <-- nA;  // Set the size of the list B equals to list A

// Loop over list A and copy each element to list B, in the same
// positions
for i from 1 to nA repeat
    B[i] <-- A[i]
```

### Parameters
In our pseudocodes, we're going to write both the inputs and outputs
in the function parameters.

As we can see in the example 1, the ```copyList(A,B)``` function
has two paramaters, A and B. A is the input and B is the output.

## Now we can start!
Enough of the details. Let's go to the point.

## Bubblesort
As a swap sorting algorithm, bubblesort swaps two elements at each
step until all the elements in the list are sorted.

Let's sort this A list.

```
bubbleSort(A)
    n <-- nA; end <-- n;
    for i from 1 to (n - 1)
        for k from 1 to (end - 1)
            if A[k] > A[k+1] then 
                aux <-- A[k];
                A[k] <-- A[k+1];
                A[k+1] <-- aux;
        end <-- end - 1;
```