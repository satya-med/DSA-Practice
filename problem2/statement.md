Problem Statement: Reverse Substring Before 'i' and Remove 'i'

You are given a string s consisting of lowercase English letters. Your task is to modify the string such that for each occurrence of the letter 'i', the substring that appears before it (up to but not including 'i') is reversed, and the letter 'i' itself is removed from the string. If there are multiple occurrences of 'i', this operation should be applied separately for each occurrence.

Input
A string s where 1 <= s.length <= 10^5 and s consists of lowercase English letters.
Output
A modified string where each occurrence of 'i' is preceded by its reversed substring, and the 'i' is removed.
Example
Input: "helloiworld"
Output: "ollehworld"
Explanation: The substring "hello" is reversed to "olleh" before 'i', and 'i' is removed from the string.

Input: "codingisfun"
Output: "gncodsfun"
Explanation: "cod" is reversed to "doc" so "docngisfun" now the string "docng" is revered to "gncod" hence result "gncodsfun"

Input: "abcde"
Output: "abcde"
Explanation: There is no 'i' in the string, so no changes are made.


Constraints
The string s can contain multiple 'i's.
The reverse operation should only apply to the substring preceding each 'i'.
The 'i' should be removed from the string.
The operation should be performed efficiently to handle large inputs.