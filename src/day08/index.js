import run from "aocrunner"

const parseInput = rawInput => rawInput.split('\n')

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  const visible = (x, y) => {
    const num = input[x][y]
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    let asd = false
    dirs.forEach(([dx, dy]) => {
      for (var i = 1; input[x+i*dx] && input[x+i*dx][y+i*dy] != undefined; i++) {
        if (input[x+i*dx][y+i*dy] >= num)
          return false
      }
      asd = true
    })
    return asd
  }

  let count = 0

  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input[i].length; j++) {
      count += visible(i, j)
    }
  }

  return count
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  const visible = (x, y) => {
    const num = input[x][y]
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    let asd = 1
    dirs.forEach(([dx, dy]) => {
      var count = 0
      for (var i = 1; input[x+i*dx] && input[x+i*dx][y+i*dy] != undefined; i++) {
        count++
        if (input[x+i*dx][y+i*dy] >= num)
          break
      }
      asd *= count
    })
    return asd
  }

  let max = 0

  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input[i].length; j++) {
      max = Math.max(visible(i, j), max)
    }
  }

  return max
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
