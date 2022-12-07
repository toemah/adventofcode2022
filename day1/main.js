// part 1
/*const xhr = new XMLHttpRequest();
const solve = function() {
    let arrCal = xhr.responseText.split("\n");
    let calTot = 0;
    let arrCalTot = [];
    arrCal.forEach(cal => {
        if(cal != "") calTot += parseInt(cal);
        else {
            arrCalTot.push(calTot);
            calTot = 0;
        }
    });
    const maxCal = Math.max(...arrCalTot);
    console.log(`Elf number ${arrCalTot.indexOf(maxCal)} is carrying ${maxCal} calories`);
}
xhr.onload = solve;
xhr.open("GET", "./input");
xhr.send();*/
// part 2
/*const xhr = new XMLHttpRequest();
const solve = function () {
    let arrCal = xhr.responseText.split("\n");
    let calTot = 0;
    let arrCalTot = [];
    arrCal.forEach(cal => {
        if (cal != "") calTot += parseInt(cal);
        else {
            arrCalTot.push(calTot);
            calTot = 0;
        }
    });
    arrCalTot.sort((a, b) => b > a);
    let trio = arrCalTot.slice(0, 3);
    const maxCal = trio.reduce((a, b) => a + b, 0);
    console.log(`Elf is carrying ${maxCal} calories`);
}
xhr.onload = solve;
xhr.open("GET", "./input");
xhr.send();*/