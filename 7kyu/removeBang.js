let string = "Hi Hi! Hi!";

function remove (string) {
    let stringArr = string.split(" ");
    // console.log('StringArr ' + stringArr + ' ' + stringArr.length);

    const resultsArr = [];
    stringArr.forEach(element => {
        const found = element.match(/!/g);
        // console.log(found);
        if (found) {
            // resultsArr.push("");
            console.log(found.length);
        } else {
            resultsArr.push(element);
        }
    });
    const newString = resultsArr.join(' ').trim();
    // console.log(newString);
  }

  remove(string);