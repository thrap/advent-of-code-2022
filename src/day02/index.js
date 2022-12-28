import run from "aocrunner"

const parseLine = l => l.split(' ').map((c, i) => c.charCodeAt(0) - (i ? 87 : 64))
const parseInput = rawInput => rawInput.split('\n').map(parseLine)

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  // ROCK:     1
  // Paper:    2
  // Scissors: 3
  const win = { 1: 3, 2: 1, 3: 2 }

  return input.map(([o, p]) => {
    if (p == o) {
      return 3 + p
    } else if (win[p] == o) {
      return 6 + p
    } else {
      return p
    }
  }).reduce((acc, x) => acc + x)
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const part1Input = `A Y
B X
C Z`
const part2Input = part1Input
run({
  part1: {
    tests: [
      { input: part1Input, expected: 15 },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      { input: part2Input, expected: 12 },
    ],
    solution: part2,
  },
  onlyTests: false,
})
