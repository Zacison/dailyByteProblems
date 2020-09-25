/**
 * Given two strings representing sentences, 
 * return the words that are not common to both strings 
 * (i.e. the words that only appear in one of the sentences). You may assume that each sentence is a sequence of words (without punctuation) correctly separated using space characters. 

Ex: given the following strings...

sentence1 = "the quick", sentence2 = "brown fox", 
return ["the", "quick", "brown", "fox"]
sentence1 = "the tortoise beat the haire", 
sentence2 = "the tortoise lost to the haire", 
return ["beat", "to", "lost"]
sentence1 = "copper coffee pot", sentence2 = "hot coffee pot", r
eturn ["copper", "hot"]
 */


 const uncommonWords = (sentence1, sentence2) => {
    let sen1 = sentence1.split(' ');
    let sen2 = sentence2.split(' ');

    //put them into an object for easy lookup
    //putting into an object eleminates duplicates, so you only have to check once
    let sen1Obj = {}
    for (let i = 0; i < sen1.length; i++) {
        sen1Obj[sen1[i]] = true;
    }
    let sen2Obj = {}
    for (let i = 0; i < sen2.length; i++) {
        sen2Obj[sen2[i]] = true;
    }


    let results = [];

    //check each object for exclusivity
    for (const word in sen2Obj) {
       if(!sen1Obj[word]) {
        results.push(word);
       }
    }

    for (const word in sen1Obj) {
        if(!sen2Obj[word]) {
         results.push(word);
        }
     }

    console.log(sen1Obj, sen2Obj);
    console.log(results)
}







//better solution
 const uncommonWords2 = (sentence1, sentence2) => {
    let sen1 = sentence1.split(' ');
    let sen2 = sentence2.split(' ');

    //add the two to an object that tracks the counts of each word
    let count = {};
    countTracker(sen1, count)
    countTracker(sen2, count)

    //add the words that only have 1 count to the output
    let results = [];
    for (let c in count) {
        if(count[c] == 1) {
            results.push(c)
        }
    }

    console.log(results)
    return results;
 }

 //helper function for counts
 const countTracker = (sen, count) => {
    for (let i = 0; i < sen.length; i++) {
        if(!count[sen[i]]) {
            count[sen[i]] = 1;
        } else {
            count[sen[i]]++;
        }
    }
    
}

 uncommonWords2("copper coffee pot", "hot coffee pot");