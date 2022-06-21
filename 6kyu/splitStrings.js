const str = "abcde"

function solution(str){
   let strArr = str.split('');
   let solutionArr = [];

   if (strArr.length % 2 === 0) {
       while(strArr.length > 0) {
        let charOne = strArr.shift();
        let charTwo = charOne.concat(strArr.shift())

        solutionArr.push(charTwo)
       }
        
        console.log(solutionArr)
   } else {
    while(strArr.length > 0) {
        let charOne = strArr.shift();
        let charTwo = charOne.concat(strArr.shift())

        solutionArr.push(charTwo)

        if (strArr.length === 1) {
            let charOdd = strArr.shift()
            let addUnderScore = charOdd.concat('_')
            console.log(addUnderScore)
            solutionArr.push(addUnderScore)
        }
   }
   console.log(solutionArr)
}
}
solution(str);