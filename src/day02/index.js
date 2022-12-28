import run from "aocrunner"

const parseLine = l => l.split(' ').map((c, i) => c.charCodeAt(0) - (i ? 87 : 64))
const parse = input => input.split('\n').map(parseLine)

const win = { 1: 3, 2: 1, 3: 2 }
const lose = { 1: 2, 2: 3, 3: 1 }

const part1 = (input) => {
  return parse(input).map(([o, p]) => {
    if (p == o) {
      return 3 + p
    } else if (win[p] == o) {
      return 6 + p
    } else {
      return p
    }
  }).reduce((acc, x) => acc + x)
}

const part2 = (input) => {
  return parse(input).map(([o, p]) => {
    if (p == 2) {
      return 3 + o
    } else if (p == 1) {
      return win[o]
    } else {
      return 6 + lose[o]
    }
  }).reduce((acc, x) => acc + x)
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
