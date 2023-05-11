import run from "aocrunner"

const re = /(.*)/
const parseLine = l => l.match(re).slice(1).map(x => +x ? +x : x)
const parseInput = rawInput => rawInput.split('\n')//.map(parseLine)

const dirs = [[1,0],[-1,0],[0,1],[0,-1]]

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  const visited = {}
  const rec = (x, y, steps) => {
    if (visited[x+" "+y] <= steps) return
    visited[x+" "+y] = steps
    const from = input[x][y]
    dirs.forEach(([dx, dy]) => {
      if (!input[x+dx] || !input[x+dx][y+dy]) return
      const to = input[x+dx][y+dy]

      if (to.charCodeAt(0) - from.charCodeAt(0) <= 1 || from == 'S' && to == 'b' || from == 'S' && to == 'a' || from == 'y' && to == 'E' || from == 'z' && to == 'E') {
        rec(x+dx, y+dy, steps+1)
      }
    })
  }

  for(var x = 0; x < input.length; x++) {
    for(var y = 0; y < input[x].length; y++) {
      if (input[x][y] == "S") {
        rec(x,y,0)
      }
    }
  }

  for(var x = 0; x < input.length; x++) {
    for(var y = 0; y < input[x].length; y++) {
      if (input[x][y] == "E") {
        return visited[x+" "+y]
      }
    }
  }
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const part1Input = `Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`
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
