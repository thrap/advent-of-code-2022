import run from "aocrunner"

const solve = (input, n) => {
  for(var i = 0; i < input.length; i++) {
    if (new Set(input.substring(i, i+n).split('')).size == n) {
      return i+n
    }
  }
}

run({
  part1: {
    solution: (input) => solve(input, 4),
  },
  part2: {
    solution: (input) => solve(input, 14),
  },
})
