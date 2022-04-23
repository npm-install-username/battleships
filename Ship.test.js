import ship from "./Ship";



test("creates ship array for length 3", ()=>{
    let threeLengthShip = ship(3);
    expect(threeLengthShip.shipArray).toEqual([0,1,2])
})