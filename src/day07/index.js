import run from "aocrunner"

const parseTree = input => {
  let root = {files: [], dirs:{}, parent:null}
  let tree = root
  const CD = /^\$ cd (.*)$/
  input.split('\n').forEach(cmd => {
    if (CD.test(cmd)) {
      const dir = cmd.match(CD).slice(1)[0]
      if (dir == '..') {
        tree = tree.parent
      } else {
        tree.dirs[dir] = {files: [], dirs:{}, parent:tree}
        tree = tree.dirs[dir]
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
  return root
}

const part1 = (rawInput) => {
  const tree = parseTree(rawInput)
  const sums = []

  const size = (node) => {
    let sum = node.files.reduce((acc, [s]) => acc + s, 0)
    Object.keys(node.dirs).forEach(child => {
      sum += size(node.dirs[child])
    })
    sums.push(sum)
    return sum
  }
  size(tree)

  return sums.filter(x => x <= 100000).reduce((acc, x) => acc + x)
}

const part2 = (rawInput) => {
  const tree = parseTree(rawInput)

  const sums = []
  const size = (node) => {
    let sum = node.files.reduce((acc, [s]) => acc + s, 0)
    Object.keys(node.dirs).forEach(child => {
      sum += size(node.dirs[child])
    })
    sums.push(sum)
    return sum
  }

  const used = size(tree)
  return sums.sort((a, b) => a-b).find(x => 70000000-used+x >= 30000000)
}

run({
  part1: {
    solution: part1,
  },
  part2: {
    solution: part2,
  },
})
