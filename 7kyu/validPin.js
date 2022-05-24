const pin = 1.234;

function validatePIN (pin) {
    //return true or false
    // const regex = /[0-9]/;

    

    if (`${pin}`.length === 4 || `${pin}`.length === 6){
        
        if (parseInt(pin) > 0 && parseInt(pin) % 1 != 0) {
            console.log(true)
        } else {
            console.log(false)
        }
    } else {
        console.log(false)
    }
  }

  validatePIN(pin);