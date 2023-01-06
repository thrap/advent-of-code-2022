import run from "aocrunner"

const part1 = (input) => {
  for(var i = 0; i < input.length; i++) {
    if (new Set(input.substring(i, i+4).split('')).size == 4) {
      return i+4
    }
  }
}

const part2 = (input) => {
}

const part1Input = `nppdvjthqldpwncqszvftbrmjlhg`
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
