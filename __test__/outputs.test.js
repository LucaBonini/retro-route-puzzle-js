const { checkMe, setRooms } = require('../utils')
const fs = require('fs')

describe('output1', () => {
  it('should output the route to collect the objects using input 1', () => {
    const input = JSON.parse(fs.readFileSync(`data/input1.json`))
    const { map, startRoom, objects } = input
    let rooms = setRooms(map.rooms)
    const result = checkMe(rooms, startRoom, objects, [], [])
    expect(result).toEqual([
      'ID: 2, Room: Dining Room None',
      'ID: 1, Room: Hallway None',
      'ID: 2, Room: Dining Room None',
      'ID: 3, Room: Kitchen Knife',
      'ID: 2, Room: Dining Room None',
      'ID: 4, Room: Sun Room Potted Plant'
    ])
  })
})

describe('output2', () => {
  it('should output the route to collect object input 2', () => {
    const input = JSON.parse(fs.readFileSync(`data/input2.json`))
    const { map, startRoom, objects } = input
    let rooms = setRooms(map.rooms)
    const result = checkMe(rooms, startRoom, objects, [], [])
    expect(result).toEqual([
      'ID: 4, Room: Sun Room None',
      'ID: 6, Room: Bathroom None',
      'ID: 4, Room: Sun Room None',
      'ID: 7, Room: Living room Potted Plant',
      'ID: 4, Room: Sun Room None',
      'ID: 2, Room: Dining Room None',
      'ID: 5, Room: Bedroom Pillow',
      'ID: 2, Room: Dining Room None',
      'ID: 1, Room: Hallway None',
      'ID: 2, Room: Dining Room None',
      'ID: 3, Room: Kitchen Knife'
    ])
  })
})