const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
const lines = [];

rl.on('line', (line) => {
  lines.push(line.split(' '));
});

rl.once('close', () => {
  const iPlayScore = {
    X: 1,
    Y: 2,
    Z: 3,
  };
  const result = {
    A: { X: 3, Y: 6, Z: 0 },
    B: { X: 0, Y: 3, Z: 6 },
    C: { X: 6, Y: 0, Z: 3 },
  };
  const answer = lines.reduce(
    (acc, [hePlays, iPlay]) => acc + iPlayScore[iPlay] + result[hePlays][iPlay],
    0
  );
  console.log(answer);
});
