import run from "aocrunner"
const alphabet = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const part1 = (input) => {
  const sacks = input.split('\n').map(s => [s.slice(0, s.length/2), s.slice(s.length/2)])

  const set = {}
  sacks.map(([a, b]) => {
    const c = a.split('').find(c => b.includes(c))
    set[c] = (set[c]||0) + 1
  })

  return Object.keys(set).reduce((acc,x) => acc + alphabet.indexOf(x)*set[x], 0)
}

const part2 = (input) => {
  const groups = (input+'\n').match(/(.*\n){3}/g).map(s => s.split('\n').map(s => new Set(s.split(''))))

  const intersection = (a, b) => new Set([...a].filter(x => b.has(x)))
  const badge = ([a,b,c]) => [...intersection(intersection(a, b), c)][0]

  return groups.map(badge).reduce((acc,x) => acc + alphabet.indexOf(x), 0)
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
