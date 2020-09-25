const reverseString = (string) => {
    let newStr = string.split('');

    for (let i = 0; i < newStr.length/2; i++) {   
        temp = newStr[i];
        newStr[i] = newStr[newStr.length - i - 1];
        newStr[newStr.length - i -1] = temp;
    }
    
    string = newStr.join('');

    console.log(string);
    return string;
}

reverseString('Hello there');