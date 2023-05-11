import run from "aocrunner"

const parseMonkey = l => {
  const re = /Starting items: (.*)\n.*Operation: (.*)\n.*by (\d+)\n.*key (\d+)\n.*key (\d+)/
  return l.match(re).slice(1)
}
const parseInput = rawInput => {
  const input = rawInput.split('\n\n').map(parseMonkey)
  const monkeys = []
  input.forEach(([a, b, c, d, e]) => {
    monkeys.push({
      items: a.split(', ').map(x => +x),
      operation: (old) => eval(b.replace(/new = /g, '')),
      test: +c,
      true: +d,
      false: +e
    })
  });
  return monkeys
}

const iterate = (monkeys, rounds, f) => {
  const count = monkeys.map(_ => 0)
  const items = monkeys.map(x => x.items)
  for(var i = 0; i < rounds; i++) {
    items.forEach((arr, i) => {
      const monkey = monkeys[i]
      while(arr.length) {
        count[i] += 1
        const item = arr.shift()
        const worry = f(monkey.operation(item))
        items[monkey[worry % monkey.test == 0]].push(worry)
      }
    })
  }

  const [a, b] = count.sort((a, b) => b-a)
  return a*b
}

const part1 = (rawInput) => {
  const monkeys = parseInput(rawInput)

  return iterate(monkeys, 20, x => Math.floor(x/3))
}

const part2 = (rawInput) => {
  const monkeys = parseInput(rawInput)

  const mod = monkeys.reduce((acc, m) => acc * m.test, 1)
  return iterate(monkeys, 10000, x => x % mod)
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
