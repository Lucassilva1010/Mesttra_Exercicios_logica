var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map(Number);

let original = [...lines]

lines.sort((a, b) => a - b)

for (let i = 0; i < lines.length; i++) {
    console.log(lines[i])
}
console.log()
for (let i = 0; i < original.length; i++) {
    console.log(original[i])
}