const fighters = [
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

const moves = ["up","left","down","right","up","left","down","right"];

const position = [0,0];

function streetFighterSelection(fighters, position, moves){
    let currentPosition = position;
    let numFighters = fighters[0].length;
    
    let returnMe = moves.map(move => {
        if (move === 'up' && currentPosition[0] === 0) {
           return fighters[currentPosition[0]][currentPosition[1]]
        } else if (move === 'down' && currentPosition[0] === 1) {
            return fighters[currentPosition[1]][currentPosition[1]]
        } else if(move === 'left' && currentPosition[1] === 0) {
            currentPosition[1] = numFighters-1;
            return fighters[currentPosition[0]][currentPosition[1]]
        } else if(move === 'right' && currentPosition[1] === (numFighters - 1)) {
            currentPosition[1] = 0;
            return fighters[currentPosition[0]][currentPosition[1]]
        } else {
            if (move === 'up') {
                return fighters[currentPosition[0]-=1][currentPosition[1]];
            } else if (move === 'down') {
                return fighters[currentPosition[0]+=1][currentPosition[1]]
            } else if (move === 'left') {
                currentPosition[1]--;
                return fighters[currentPosition[0]][[currentPosition[1]]]
            } else if (move === 'right') {
                currentPosition[1]++;
                return fighters[currentPosition[0]][[currentPosition[1]]]
            }
        }
    })
    console.log(returnMe)
  }

  streetFighterSelection(fighters, position, moves)