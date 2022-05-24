let day = 10;
let month = 10;

const getZodiacSign = (day, month) => {
    // good luck
    const signs = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo',
     'Virgo', 'Libra', 'Scorpio', 'Sagittarius'];

    switch (month) {
        case 1: {
            if (day >= 1 && day <= 19) {
                return signs[0]
            } else {
                return signs[1]
            }
            break; 
        }
        case 2: {
            if (day >= 1 && day <= 18) {
                return signs[1]
            } else {
                return signs[2]
            }
            break; 
        }
        case 3: {
            if (day >= 1 && day <= 20) {
                return signs[2]
            } else {
                return signs[3]
            }
            break; 
        }
        case 4: {
            if (day >= 1 && day <= 19) {
                return signs[3]
            } else {
                return signs[4]
            }
            break; 
        }
        case 5: {
            if (day >= 1 && day <= 20) {
                return signs[4]
            } else {
                return signs[5]
            }
            break; 
        }
        case 6: {
            if (day >= 1 && day <= 20) {
                return signs[5]
            } else {
                return signs[6]
            }
            break; 
        }
        case 7: {
            if (day >= 1 && day <= 22) {
                return signs[6]
            } else {
                return signs[7]
            }
            break; 
        }
        case 8: {
            if (day >= 1 && day <= 22) {
                return signs[7]
            } else {
                return signs[8]
            }
            break; 
        }
        case 9: {
            if (day >= 1 && day <= 22) {
                return signs[8]
            } else {
                return signs[9]
            }
            break; 
        }
        case 10: {
            if (day >= 1 && day <= 22) {
                return signs[9]
            } else {
                return signs[10]
            }
            break; 
        }
        case 11: {
            if (day >= 1 && day <= 21) {
                return signs[10]
            } else {
                return signs[11]
            }
            break; 
        }
        case 12: {
            if (day >= 1 && day <= 19) {
                return signs[11]
            } else {
                return signs[0]
            }
            break; 
        }
    }
    
    //  Aries (March 21-April 19)
    //  Taurus (April 20-May 20)
    //  Gemini (May 21-June 20)
    //  Cancer (June 21-July 22)
    //  Leo (July 23-August 22)
    //  Virgo (August 23-September 22)
    //  Libra (September 23-October 22)
    //  Scorpio (October 23-November 21)
    //  Sagittarius (November 22-December 21)
    //  Capricorn (December 22-January 19)
    //  Aquarius (January 20 to February 18)
    //  Pisces (February 19 to March 20)

  }

  let zodiac = getZodiacSign(day, month);
  console.log(zodiac)