// part 1
/*const scores = {
    A: 1,
    X: 1,
    B: 2,
    Y: 2,
    C: 3,
    Z: 3,
}
const xhr = new XMLHttpRequest();
const solve = function() {
    let arr = xhr.responseText.split("\n");
    arr.pop();
    console.log(arr);
    let total = 0;
    arr.forEach(str => {
        const moves = str.split(" ");
        const opponent = moves[0];
        const player = moves[1];
        total += scores[player];
        if(scores[opponent] == scores[player]) total += 3; 
        switch(opponent) {
            case "A":
                if(player == "Y") total += 6;
                break;
            case "B":
                if(player == "Z") total += 6;
                break;
            case "C":
                if(player == "X") total += 6;
                break;
        }
    });
    console.log(total);
}
xhr.onload = solve;
xhr.open("GET", "./input");
xhr.send();*/
// part 2
/*const scores = {
    A: 1,
    X: 1,
    B: 2,
    Y: 2,
    C: 3,
    Z: 3,
}
const xhr = new XMLHttpRequest();
const solve = function() {
    let arr = xhr.responseText.split("\n");
    arr.pop();
    console.log(arr);
    let total = 0;
    arr.forEach(str => {
        const moves = str.split(" ");
        const opponent = moves[0];
        const player = moves[1];
        switch(player) {
            case "X":
                if(opponent == "A") total += scores["Z"];
                else if(opponent == "B") total += scores["X"];
                else if(opponent == "C") total += scores["Y"];
                break;
            case "Y":
                total += 3 + scores[opponent];
                break;
            case "Z":
                total += 6;
                if(opponent == "A") total += scores["Y"];
                else if(opponent == "B") total += scores["Z"];
                else if(opponent == "C") total += scores["X"];
                break;
        }
    });
    console.log(total);
}
xhr.onload = solve;
xhr.open("GET", "./input");
xhr.send();*/