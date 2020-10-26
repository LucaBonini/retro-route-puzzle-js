const Room = require('./classes/Room')

function checkMe (rooms, id, objects, objectsFound, result) {
  // check my object
  const objectsInRoom = rooms[id].getObjectsByName(objects)
  let objectsInRoomText = 'None'

  // If i find objects I push them in objectsFound
  if (objectsInRoom.length) {
    objectsFound = [...objectsFound, ...objectsInRoom]
    // format as text
    objectsInRoomText = objectsInRoom.join(',')
  }

  result.push(`ID: ${id}, Room: ${rooms[id].name} ${objectsInRoomText}`)

  // get next room id
  const nextRoom = rooms[id].getNextRoomId()

  if (nextRoom && (objectsFound.length < objects.length)) {
    return checkMe(rooms, nextRoom, objects, objectsFound, result)
  } else {
    return result
  }
}

function setRooms (rooms) {
  const newRooms = {}

  rooms.forEach(room => {
    newRooms[room.id] = new Room(room)
  })

  return newRooms
}

module.exports = { checkMe, setRooms }
