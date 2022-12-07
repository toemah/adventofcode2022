const xhr = new XMLHttpRequest();
// part 1
const solve1 = function () {
    let arr = xhr.responseText.trim().split("\n");
    let total = 0;
    arr.forEach(str => {
        const sections = str.split(","),
            s1 = sections[0].split("-"), s2 = sections[1].split("-"),
            s1i1 = parseInt(s1[0]), s1i2 = parseInt(s1[1]),
            s2i1 = parseInt(s2[0]), s2i2 = parseInt(s2[1]);
        if ((s1i1 >= s2i2 && s1i2 <= s2i1)
            || (s2i2 >= s1i1 && s2i1 <= s1i2)) {
            total++;
        }
    });
    console.log(total);
}
// part 2
const solve2 = function () {
    let arr = xhr.responseText.trim().split("\n");
    let total = 0;
    arr.forEach(str => {
        const sections = str.split(","),
            s1 = sections[0].split("-"), s2 = sections[1].split("-"),
            s1i1 = parseInt(s1[0]), s2i1 = parseInt(s2[0]);
        if ((s1i1 >= s2i1 && parseInt(s2[1]) >= s1i1)
            || (parseInt(s1[1]) >= s2i1 && s2i1 >= s1i1)) {
            total++;
        }
    });
    console.log(total);
}
// run
xhr.onload = solve1;
xhr.open("GET", "./input");
xhr.responseType = "text";
xhr.send();