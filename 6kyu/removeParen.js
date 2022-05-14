const s = "(first group) (second group) (third group)"


function removeParentheses(s){
    const regex = /\((.*)\)/;
    let removeParen = s.replace(regex, '');

    console.log(removeParen)

    return removeParen;

}

removeParentheses(s);