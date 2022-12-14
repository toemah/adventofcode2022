const xhr = new XMLHttpRequest();
const stacks = [];
const instructions = [];
// part 1
const solve1 = function () {
    const [stack, instructions] = xhr.responseText.split(/\n\n/);
    stack.split("\n").forEach(str => {
        if (!str.match(/^.[0-9]/)) {
            const crates = str.match(/.{1,4}/g);
            for (let i = 0; i < crates.length; i++) {
                if (stacks[i] == undefined) stacks.push([]);
                if (crates[i].trim() != "") stacks[i].push(crates[i].match(/[A-Z]/)[0]);
            }
        }
    });
    for (let i = 0; i < stacks.length; i++) {
        stacks[i].reverse();
    }
    let cratesToMove = [];
    let amount = 0;
    instructions.trim().split("\n").forEach(str => {
        const indexes = str.match(/[0-9]+/g);
        for (let i = 0; i < indexes.length; i++) {
            switch (i) {
                case 0:
                    amount = parseInt(indexes[0]);
                    break;
                case 1:
                    const moveCrateFrom = parseInt(indexes[i]) - 1;
                    for (let j = 0; j < amount; j++) {
                        cratesToMove.push(stacks[moveCrateFrom].pop());
                    }
                    cratesToMove.reverse();
                    break;
                case 2:
                    const moveCrateTo = parseInt(indexes[i]) - 1;
                    for (let j = 0; j < amount; j++) {
                        stacks[moveCrateTo].push(cratesToMove.pop());
                    }
                    break;
            }
        }
    });
    console.log(stacks.map(s => s[s.length - 1]).join(""));
}
// part 2
const solve2 = function () {
    const [stack, instructions] = xhr.responseText.split(/\n\n/);
    stack.split("\n").forEach(str => {
        if (!str.match(/^.[0-9]/)) {
            const crates = str.match(/.{1,4}/g);
            for (let i = 0; i < crates.length; i++) {
                if (stacks[i] == undefined) stacks.push([]);
                if (crates[i].trim() != "") stacks[i].push(crates[i].match(/[A-Z]/)[0]);
            }
        }
    });
    for (let i = 0; i < stacks.length; i++) {
        stacks[i].reverse();
    }
    let cratesToMove = [];
    let amount = 0;
    instructions.trim().split("\n").forEach(str => {
        const indexes = str.match(/[0-9]+/g);
        for (let i = 0; i < indexes.length; i++) {
            switch (i) {
                case 0:
                    amount = parseInt(indexes[0]);
                    break;
                case 1:
                    const moveCrateFrom = parseInt(indexes[i]) - 1;
                    for (let j = 0; j < amount; j++) {
                        cratesToMove.push(stacks[moveCrateFrom].pop());
                    }
                    break;
                case 2:
                    const moveCrateTo = parseInt(indexes[i]) - 1;
                    for (let j = 0; j < amount; j++) {
                        stacks[moveCrateTo].push(cratesToMove.pop());
                    }
                    break;
            }
        }
    });
    console.log(stacks.map(s => s[s.length - 1]).join(""));
}
// run
xhr.onload = solve2;
xhr.open("GET", "./day5/input");
xhr.responseType = "text";
xhr.send();