import ship from "./Ship";



test("creates ship array for length 3", ()=>{
    let threeLengthShip = ship(3);
    expect(threeLengthShip.shipArray).toEqual([0,1,2])
})

test("ship is hit in position 2 and ship array is updated", ()=>{
    let threeLengthShip = ship(3);
    expect(threeLengthShip.hit(2)).toEqual([0,'h',2])
})