import run from "aocrunner"

const re = /(.*)/
const parseMonkey = l => {
  const re = /Starting items: (.*)\n.*Operation: (.*)\n.*by (\d+)\n.*key (\d+)\n.*key (\d+)/
  return l.match(re).slice(1)
}
const parseInput = rawInput => rawInput.split('\n\n').map(parseMonkey)

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
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

  const count = monkeys.map(_ => 0)
  const items = monkeys.map(x => x.items)
  for(var i = 0; i < 20; i++) {
    items.forEach((arr, i) => {
      const monkey = monkeys[i]
      while(arr.length) {
        count[i] += 1
        const item = arr.shift()
        const worry = Math.floor(monkey.operation(item)/3)
        items[monkey[worry % monkey.test == 0]].push(worry)
      }
    })
  }

  const [a, b] = count.sort((a, b) => b-a)
  return a*b
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const part1Input = `Monkey 0:
Starting items: 79, 98
Operation: new = old * 19
Test: divisible by 23
  If true: throw to monkey 2
  If false: throw to monkey 3

Monkey 1:
Starting items: 54, 65, 75, 74
Operation: new = old + 6
Test: divisible by 19
  If true: throw to monkey 2
  If false: throw to monkey 0

Monkey 2:
Starting items: 79, 60, 97
Operation: new = old * old
Test: divisible by 13
  If true: throw to monkey 1
  If false: throw to monkey 3

Monkey 3:
Starting items: 74
Operation: new = old + 3
Test: divisible by 17
  If true: throw to monkey 0
  If false: throw to monkey 1`
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
