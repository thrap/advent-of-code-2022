import run from "aocrunner"

const parseInput = rawInput => rawInput.split('\n')

const dirs = { D: [1,0], R: [0,1], U: [-1,0], L: [0,-1] }

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  let hx = 0, hy = 0
  let tx = 0, ty = 0
  const visited = {}

  input.forEach(s => {
    const [dir, steps] = s.split(' ')
    const [dx, dy] = dirs[dir]
    for (var i = 0; i < steps; i++) {
      hx += dx
      hy += dy
      if (Math.abs(hx - tx) >= 2 || Math.abs(hy - ty) >= 2) {
        tx += Math.sign(hx - tx)
        ty += Math.sign(hy - ty)
      }
      visited[tx + ' ' + ty] = true
    }
  })

  return Object.keys(visited).length
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const part1Input = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`
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
