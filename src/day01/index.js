import run from "aocrunner"

const elves = s => s.split('\n\n').map(s => s.split('\n').reduce((acc, x) => +x+acc,0))

const part1 = (input) => Math.max(...elves(input))

const part2 = (input) => {
  const sorted = elves(input).sort((a,b) => b-a)
  return sorted.slice(0,3).reduce((acc, x) => acc + x)
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
