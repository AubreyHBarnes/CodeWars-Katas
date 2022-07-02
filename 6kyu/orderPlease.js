function order(words){
    let returnArr = new Array();
    //split string into array
    let splitStr = words.split(' ');
    //regex for any number
  if (words === "") return ""
    
    splitStr.forEach(word => {
        let foundNum = word.match(/\d/)
        returnArr[foundNum[0]-1] = word;
        
        
    });

    return returnArr.join(' ')
    //swap elements into appropriate spot in array
}