const fs = require('fs')
const { checkMe, setRooms } = require('./utils')

const inputFile = process.argv[2]
const rawData = fs.readFileSync(`data/${inputFile}`)

let input

try {
  input = JSON.parse(rawData)
} catch (error) {
  console.log(error)
  process.exit(1)
}

const { map, startRoom, objects } = input

if (!startRoom || !map || !objects) {
  console.log('Missing required input fields')
  process.exit(1)
}

const rooms = setRooms(map.rooms)

const result = checkMe(rooms, startRoom, objects, [], [])
console.log(result)
module.exports = checkMe
