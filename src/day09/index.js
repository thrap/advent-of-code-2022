import run from "aocrunner"

const parseInput = rawInput => rawInput.split('\n')

const dirs = { D: [1,0], R: [0,1], U: [-1,0], L: [0,-1] }

const solve = (rawInput, ropeLength) => {
  const input = parseInput(rawInput)
  const rope = [...Array(ropeLength)].map(_ => [0,0])
  const visited = {}

  input.forEach(s => {
    const [dir, steps] = s.split(' ')
    const [dx, dy] = dirs[dir]
    for (var i = 0; i < steps; i++) {
      rope[0][0] += dx
      rope[0][1] += dy
      for (var j = 1; j < rope.length; j++) {
        if (Math.abs(rope[j-1][0] - rope[j][0]) >= 2 || Math.abs(rope[j-1][1] - rope[j][1]) >= 2) {
          rope[j][0] += Math.sign(rope[j-1][0] - rope[j][0])
          rope[j][1] += Math.sign(rope[j-1][1] - rope[j][1])
        }
      }
      visited[rope[rope.length-1][0] + ' ' + rope[rope.length-1][1]] = true
    }
  })

  return Object.keys(visited).length
}

run({
  part1: {
    solution: (input) => solve(input, 2),
  },
  part2: {
    solution: (input) => solve(input, 10),
  },
})
