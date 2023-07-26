const amount = 100;
const monday = [
    ['Write a tutorial', 180],
    ['Some web development', 120]
];
const tuesday = [
    ['Keep writing that tutorial', 240],
    ['Some more web development', 360],
    ['A whole lot of nothing', 240]
];


const tempArr = monday.concat(tuesday);
let upadatedArr = tempArr.map(function (value) {
    value[1] = value[1] / 60;
    return value;
})
    .filter(function (value) {
        return value[1] > 2;
    })
    .map(function (value) {
        value.push(value[1] * amount + '$');
        return value;
    })
    .map(function (value) {
        return `<tr>
<td style="padding: 15px">Task name: ${value[0]}</td>
<td style="padding: 15px">Task duration: ${value[1]}</td>
<td style="padding: 15px">Task amount: ${value[2]}</td>
</tr>`;
    })
    .join(' ');

console.log(upadatedArr)

document.write(`<table>${upadatedArr}</table>`);

