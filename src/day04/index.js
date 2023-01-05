import run from "aocrunner"

const parseLine = s => s.split(',').map(x => x.split('-').map(c => +c))
const parseInput = rawInput => rawInput.split('\n').map(parseLine)

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  let count = 0
  input.forEach(([[x1, y1], [x2, y2]]) => {
    if (x1 <= x2 && y1 >= y2 || x2 <= x1 && y2 >= y1) {
      count++
    }
  })

  return count
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const part1Input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`
const part2Input = part1Input
run({
  part1: {
    tests: [
      { input: part1Input, expected: '' },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      { input: part2Input, expected: '' },
    ],
    solution: part2,
  },
  onlyTests: false,
})
