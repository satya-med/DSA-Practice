Problem Statement: Find Maximum Number with its Negative Present

You are given an array of non-zero integers. Your task is to find the maximum number in the array for which its negative counterpart is also present in the array.


Input
An array arr of non-zero integers where 1 <= arr.length <= 10^5 and -10^9 <= arr[i] <= 10^9.
Output
The maximum integer from the array such that its negative counterpart is also present in the array. If no such number exists, return null.
Example
Input: [1, -1, 2, -3, 3, 4]
Output: 3
Explanation: The numbers 1, 2, and 3 have their negative counterparts (-1, -2, -3) present in the array. Among these, 3 is the maximum number.

Input: [1, 2, 3, 4]
Output: null
Explanation: None of the numbers have their negative counterparts present in the array.

Input: [-1, 1, -2, 2, -3, -4]
Output: 2
Explanation: The numbers -1, -2, and -3 have their positive counterparts (1, 2, 3) present in the array. Among these, 2 is the maximum number.

Constraints
The array may contain duplicate elements.
Ensure your solution is efficient enough to handle large inputs.