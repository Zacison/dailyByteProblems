da/**
 * You are given two strings, s and t which only consist of lowercase letters. 
 * t is generated by shuffling the letters in s as well as potentially adding an additional random character. 
 * Return the letter that was randomly added to t if it exists, otherwise, return ’ ‘.
Note: You may assume that at most one additional character can be added to t.

Ex: Given the following strings...

s = "foobar", t = "barfoot", return 't'
s = "ide", t = "idea", return 'a'
s = "coding", t "ingcod", return ''
 */

 const spotDiff = (s, t) => {
     //sort the 2 strings for easy comparison
     s = s.split('').sort().join('');
     t = t.split('').sort().join('');

     //console.log(s,t)

     for (let i = 0; i < t.length; i++) {
         //finds the out of place char & returns it
         if(s[i] != t[i]) {
             return t[i];
         }
     }

     return '';
 }

spotDiff('ide', 'idea')
spotDiff('coding', 'ingcod')
spotDiff('foobar', 'barfoot') 