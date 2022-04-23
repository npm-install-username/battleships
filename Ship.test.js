import ship from "./Ship";



test("creates ship array for length 3", ()=>{
    let threeLengthShip = ship(3);
    expect(threeLengthShip.shipArray).toEqual([0,1,2])
})

test("ship is hit in position 2 and ship array is updated", ()=>{
    let threeLengthShip = ship(3);
    expect(threeLengthShip.hit(2)).toEqual([0,'h',2])
})

test("Ship is hit multiple times",()=>{
    let fourLengthShip = ship(4);
    fourLengthShip.hit(1)
    expect(fourLengthShip.hit(2)).toEqual(['h','h',2,3])
})

test("Sunk is returned when ship is completely hit", ()=>{
    let twoLengthShip = ship(2);
    twoLengthShip.hit(1)
    expect(twoLengthShip.hit(2)).toEqual(true)
})