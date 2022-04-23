const ship = (l) =>{
    const getLength = () =>l;
    // const isHit = () => hasBeenHit;
    // const hasBeenSunk = () => sunk;
    const createShip = (l) =>{
        const shipArray = []
        for (let i=0; i <l; i++){
            shipArray[i] = i
        }
        return shipArray
    }
    let shipArray = createShip(l);
    
    const hit =(num) =>{
        // const pos = num -1
        // shipArray[pos] = 'h'
        return shipArray
    }
    return {shipArray, hit}
}

module.exports = ship;