function parkingCost(E,L){

    //check that values were passed
    //with more time, I would implement regex to verify strings were in the format of HH:MM
    if(!E || !L || E=="" || L==""){
        return "invalid time";
    }
    var entryTime = E.split(":"),
        exitTime = L.split(":"),
        entryFee = 2,
        costPerHour,
        totalCost = 0;

    //Check for correct time ranges
    //Entry minute must be less than exit minute if entry hour is same as exit hour
    //otherwise entry hour must always be less than exit hour
    if(entryTime[0] > exitTime[0] || ((entryTime[0] == exitTime[0]) && (entryTime[1] >= exitTime[1]))){
        return "invalid time range!";
    }

    function getTotalTimeSpent(ent, ext){
        var hour = parseInt(ext[0]) - parseInt(ent[0]),
            min = parseInt(ext[1]) - parseInt(ent[1]);

        return Math.ceil(parseFloat(""+hour+"."+min));
    }
    var totalTime =  getTotalTimeSpent(entryTime, exitTime);

    //get parking cost using a simple loop
    function getParkingCost(timeParked){
        for (var i = 0; i < timeParked; i++){
            costPerHour = (i == 0 ? 3 : 4);
            totalCost += costPerHour;
        }
        return totalCost+entryFee;
    }
    return getParkingCost(totalTime);
}


//The Algorithm I came up with does not use the total number of floors in the building
//since the elevator will always stay within bounds of the building's floors

function numberOfStops(A,B, M, X, Y){
    var n = A.length;//total number of people to move to different floors
    var weightSoFar = 0;//total weight of current elevator occupants
    var destination = [];//destination array of current elevator occupants
    var numberOfStops = 0;//number of stops made so far
    var validStops = {};//hashmap to monitor unique stops

    //loop through array of weights and keep track of corresponding destination
    //check if weight limit is reached or if max people in elevator reached
    //if so, move the current people to their destinations and come back for the rest
    for (var i = 0; i < n; i++){
        var currentWeight = A[i], currentDestination = B[i];
        if(weightSoFar + currentWeight <= Y && destination.length < X){
            weightSoFar += currentWeight;
            destination.push(currentDestination);
            if(i == n-1){
                move(destination);
            }
        }
        else{
            move(destination);
            weightSoFar = 0;
            destination = [];
            weightSoFar += currentWeight;
            destination.push(currentDestination);
            if(i == n-1){
                move(destination);
            }
        }
    }

    //go through destinations and check if a particular destination has been stopped at before
    //if not, make a stop and increase stop count. If yes, keep going to the next unique stop
    function move(dest){
        dest.forEach(function(value){
           var curDest = value;
           if(!validStops[curDest]){
               numberOfStops++;
               validStops[curDest] = true;
           }
        });
        numberOfStops++; //remember to increase stop on return to the ground floor!
        validStops = {};//reinitialize validstops to empty hashmap
    }
    return numberOfStops;
}

var Ar = [60, 80, 40], Br = [2, 3, 5], Mr = 5, Yr = 200, Xr = 2;

console.log(numberOfStops(Ar, Br, Mr, Xr, Yr));