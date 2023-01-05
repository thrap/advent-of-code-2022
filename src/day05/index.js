import run from "aocrunner"

const parseInput = rawInput => {
  const [a, b] = rawInput.split('\n\n')
  const commands = b.split('\n').map(l => l.match(/move (\d+) from (\d+) to (\d+)/).slice(1).map(x => +x ? +x : x))
  const grid = a.split('\n')
  grid.pop()

  const stacks = [...Array(10)].map(_ => [])
  grid.forEach(l => {
    for (var i = 0; 4*i+1 < l.length; i++) {
      const c = l[4*i+1]
      if (c != ' ') {
        stacks[i+1].push(c)
      }
    }
  })
  return [stacks, commands]
}

const part1 = (rawInput) => {
  const [stacks, commands] = parseInput(rawInput)

  commands.forEach(([count, from, to]) => {
    for (var i = 0; i < count; i++) {
      stacks[to].unshift(stacks[from].shift())
    }
  })

  return stacks.map(x => x[0]).join('')
}

const part2 = (rawInput) => {
  const [stacks, commands] = parseInput(rawInput)

  commands.forEach(([count, from, to]) => {
    const arr = []
    for (var i = 0; i < count; i++) {
      arr.push(stacks[from].shift())
    }
    stacks[to] = arr.concat(stacks[to])
  })

  return stacks.map(x => x[0]).join('')
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
