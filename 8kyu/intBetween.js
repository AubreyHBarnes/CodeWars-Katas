let a = 1;
let b = 4;
let i = 0;

function between(a, b) {
    // your code here
    let solution = [];
    
    for (a; a <= b; i++) {
        solution[i] = a;
        a++;
    }
    console.log(solution)
    return solution;
  }

  between(a, b);