const str = "This website is for losers LOL!";
const regex = /[aeiou]/ig;

function disemvowel(str) {

    newStr = str.replace(regex, '');

    console.log(newStr);
  }

  disemvowel(str)