import run from "aocrunner"

const getCycles = (input) => {
  const cycles = {}
  let cycle = 1
  var reg = 1
  input.split('\n').forEach(s => {
    if (s == 'noop') {
      cycles[cycle++] = reg
    } else {
      cycles[cycle++] = reg
      cycles[cycle++] = reg
      reg += +s.split(' ')[1]
    }
  })
  return cycles
}

const part1 = (input) => {
  const cycles = getCycles(input)

  return [20,60,100,140,180,220].reduce((acc, x) => acc + x*cycles[x], 0)
}

const part2 = (input) => {
  const cycles = getCycles(input)

  let str = ''
  for (var i = 0; i < 240; i++) {
    str += (Math.abs(cycles[i+1] - i%40) <= 1 ? '█' : ' ')
    if ((i+1) % 40 == 0)
      str += '\n'
  }
  console.log(str);

  return "EHPZPJGL"
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
