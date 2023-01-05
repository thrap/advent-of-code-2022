import run from "aocrunner"

const parseLine = s => s.split(',').map(x => x.split('-').map(c => +c))
const parseInput = rawInput => rawInput.split('\n').map(parseLine)

const part1 = (rawInput) => {
  const contains = ([[x1, y1], [x2, y2]]) =>
    x1 <= x2 && y1 >= y2 || x2 <= x1 && y2 >= y1
  return parseInput(rawInput).filter(contains).length
}

const part2 = (rawInput) => {
  const overlaps = ([[x1, y1], [x2, y2]]) =>
    x1 >= x2 && x1 <= y2 || y1 >= x2 && y1 <= y2 ||
    x2 >= x1 && x2 <= y1 || y2 >= x1 && y2 <= y1
  return parseInput(rawInput).filter(overlaps).length
}
run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
