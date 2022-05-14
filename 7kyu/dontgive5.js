

// let start = 1;
// let end = 9;

function dontGiveMeFive(start, end)
{
  let countEm = 0;
  for (start; start <= end; start++) {
    // console.log()
    if (start % 5 === 0 && start % 10 !== 0) {
        console.log('skipped')
      continue;
    } else {
        console.log(start)
        countEm++;
    }
  }
//   console.log(countEm)
  return 0;
}

dontGiveMeFive(4, 17)
