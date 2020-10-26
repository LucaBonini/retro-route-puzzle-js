const routes = ['north', 'south', 'west', 'east']

class Room {
  constructor(room) {
    this.name = room.name
    this.id = room.id
    this.connectedRooms = {}
    this.objects = []
    this._setObjects(room.objects)
    this._setConnectedRooms(room)
  }

  _setConnectedRooms(room) {
    routes.forEach(route => {
      if (room[route]) {
        this.connectedRooms[route] = {
          room: room[route],
          visited: false
        }
      }
    })
  }

  _setObjects(objects) {
    objects.forEach(object => {
      this.objects.push(object.name)
    })
  }

  getObjectsByName(names) {
    let objectsFound = []

    names.forEach((object, i) => {
      if (this.objects.includes(object)) {
        this.objects.splice(i, 1)
        objectsFound.push(object)
      }
    })

    return objectsFound
  }

  getNextRoomId() {
    let route = Object.keys(this.connectedRooms).filter(route => !this.connectedRooms[route].visited)[0] 

    if (route) {
      this.connectedRooms[route].visited = true
    }
    let nextRoom = route ? this.connectedRooms[route].room : false

    return nextRoom
  }
}

module.exports = Room