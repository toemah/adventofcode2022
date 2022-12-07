// part 1
/*const xhr = new XMLHttpRequest();
const solve = function() {
    let arr = xhr.responseText.split("\n");
    arr.pop();
    let total = 0;
    arr.forEach(str => {
        let mid = str.length/2;
        let charsFirstHalf = str.substring(0, mid).split("");
        let charsSecondHalf = str.substring(mid).split("");
        let duplicate = false;
        charsFirstHalf.forEach(c => {
            if(charsSecondHalf.includes(c) && !duplicate) {
                duplicate = true;
                if(c.toUpperCase() == c) {
                    total += c.charCodeAt(0) - 64 + 26;
                } else {
                    total += c.charCodeAt(0) - 96;
                }
            }
        });
        duplicate = false;
    });
    console.log(total);
}
xhr.onload = solve;
xhr.open("GET", "./input");
xhr.send();*/
// part 2
/*const xhr = new XMLHttpRequest();
const solve = function () {
    let arr = xhr.responseText.split("\n");
    arr.pop();
    let total = 0;
    let triple = false;
    for (let i = 0; i < arr.length; i += 3) {
        let str1 = arr[i].split("");
        let str2 = arr[i + 1].split("");
        let str3 = arr[i + 2].split("");
        str1.forEach(c => {
            if (str2.includes(c) && str3.includes(c) && !triple) {
                triple = true;
                if (c.toUpperCase() == c) {
                    total += c.charCodeAt(0) - 64 + 26;
                } else {
                    total += c.charCodeAt(0) - 96;
                }
            }
        });
        triple = false;
    }
    console.log(total);
}
xhr.onload = solve;
xhr.open("GET", "./input");
xhr.send();*/