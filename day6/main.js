const xhr = new XMLHttpRequest();
// part 1
const solve1 = function () {
    const input = xhr.responseText.trim().split("");
    let marker = "";
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if (marker.length == 4) break;
        let c = input[i];
        if (marker.includes(c)) {
            marker = marker.substring(marker.indexOf(c) + 1);
        }
        marker += c;
        count++;
    }
    console.log(count);
}
// part 2
const solve2 = function () {
    const input = xhr.responseText.trim().split("");
    let marker = "";
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if (marker.length == 14) break;
        let c = input[i];
        if (marker.includes(c)) {
            marker = marker.substring(marker.indexOf(c) + 1);
        }
        marker += c;
        count++;
    }
    console.log(count);
}
// run
xhr.onload = solve2;
xhr.open("GET", "./day6/input");
xhr.responseType = "text";
xhr.send();