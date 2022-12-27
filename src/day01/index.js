import run from "aocrunner"

const parseInput = (input) => input.split('\n\n').map(s => s.split('\n').map(x => +x))

const part1 = (rawInput) => {
  const elves = parseInput(rawInput)

  console.log(elves.map(elf => elf.reduce((acc, x) => +x+acc,0)))

  return Math.max(...elves.map(elf => elf.reduce((acc, x) => +x+acc,0)))
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
