const ship = (l) =>{
    // const getLength = () =>l;
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
    
    const isSunk = (shipArray) =>{
        for (let i =0; i < shipArray.length ; i++){
            if (shipArray[i]!='h'){
                return false
            }
        }
        return true
    }

    const hit =(num) =>{
        const pos = num -1
        shipArray[pos] = 'h'
        const sunk = isSunk(shipArray)
        if(sunk){
            return "sunk"
        }
        return shipArray
    }
    return {shipArray, hit}
}

module.exports = ship;