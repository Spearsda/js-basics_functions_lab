
function distanceFromHqInBlocks(street) {
   
    let blocks;
   blocks = Math.abs(street-42);

   return blocks
}

function distanceFromHqInFeet(blockNumber) {
    
    let feetDist;
    feetDist = distanceFromHqInBlocks(blockNumber) * 264


    return feetDist;
}


function distanceTravelledInFeet(start, end) {

    let travel;
    travel = Math.abs(start-end) * 264;

    return travel;
}

function calculatesFarePrice(start, destination) {

    let travel;
    travel = Math.abs(start-destination) * 264;

    let price;

    if (travel < 400) { 

        price = 0;
    }
    else if (travel > 400 && travel < 2000) {
        price = (travel-400) * 0.02;
    }
    else if (travel > 2000 && travel <2500) {
        price = 25;
    }
    else if (travel > 2500) {
        price = 'cannot travel that far'
    }

    return price;
}



