/* Given two strings s and t return whether or not s is an anagram of t.
    Note: An anagram is a word formed by reordering the letters of another word.

        Ex: Given the following strings...

s = "cat", t = "tac", return true
s = "listen", t = "silent", return true
s = "program", t = "function", return false */

const isAnagram = (s, t) => {
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');

    console.log(s, t)

    if (s == t) {
        return true;
    } else {
        return false;
    }
}

isAnagram('listen', 'silent')