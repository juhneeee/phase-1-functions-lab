// Code your solution in this file!
function distanceFromHqInBlocks(n){
    return Math.abs(42 - n)
}
function distanceFromHqInFeet(n){
    return distanceFromHqInBlocks(n)*264
}
function distanceTravelledInFeet(start,end){
    return Math.abs((start - end) * 264)
}
function calculatesFarePrice(start, end){
    let distance = distanceTravelledInFeet(start, end);
    let fare = 0
    if (distance > 2500){
        return 'cannot travel that far'
    }
    else if (distance > 2000){
        return 25
    }
    else if (distance <= 400){
        return fare
    }
    else {
        distance -= 400
        fare += distance*.02
        return fare
    }


}