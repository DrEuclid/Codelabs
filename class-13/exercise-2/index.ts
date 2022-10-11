function logRandomNumber() {
    return Math.random() * (101 - 0);
}

function logARandomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var color = "rgb(" + x + "," + y + "," + z + ")";
 console.log(color);
}

function logTo100(num) {
        for (num = 0; num < 101; num++) {
         console.log (num)
        }
     }


function logger() {
    logRandomNumber()
    logARandomColor()
    logTo100(100)
}

logger()