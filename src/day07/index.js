import run from "aocrunner"

const re = /(.*)/
const parseLine = l => l.match(re).slice(1).map(x => +x ? +x : x)
const parseInput = rawInput => rawInput.split('\n')//.map(parseLine)

const CD = /^\$ cd (.*)$/

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  let root = {files: [], dirs:{}, parent:null}
  let tree = root
  const path = []
  input.forEach(cmd => {
    if (CD.test(cmd)) {
      const dir = cmd.match(CD).slice(1)[0]
      if (dir == '..') {
        tree = tree.parent
        path.pop()
      } else {
        tree.dirs[dir] = {files: [], dirs:{}, parent:tree}
        tree = tree.dirs[dir]
        path.push(dir)
      }
    } else if (/^\$ ls$/.test(cmd)) {

    } else {
      const [a, b] = cmd.split(' ')
      if (a == 'dir') {
        tree.dirs[b] = {files: [], dirs:{}, parent:tree}
      } else {
        tree.files.push([+a, b])
      }
    }
  })

  const sums = []

  const size = (node) => {
    let sum = node.files.reduce((acc, [s]) => acc + s, 0)
    Object.keys(node.dirs).forEach(child => {
      sum += size(node.dirs[child])
    })
    sums.push(sum)
    return sum
  }
  size(root.dirs['/'])

  return sums.filter(x => x <= 100000).reduce((acc, x) => acc + x)
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const part1Input = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`
const part2Input = part1Input
run({
  part1: {
    tests: [
      { input: part1Input, expected: 95437 },
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
