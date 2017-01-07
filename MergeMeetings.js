function MergeMeetings(meetingTimes){
    meetingTimes.sort(function(a,b){
       return a.starttime > b.starttime;
    });
    var mergedMeetings = [meetingTimes[0]];
    for (var i = 1; i < meetingTimes.length; i++){
        var currentMeeting = meetingTimes[i];
        var lastmergedMeeting = mergedMeetings[mergedMeetings.length-1];
        if(currentMeeting.starttime <= lastmergedMeeting.endtime){
            lastmergedMeeting.endtime = Math.max(lastmergedMeeting.endtime, currentMeeting.endtime);
        }
        else{
            mergedMeetings.push(currentMeeting);
        }
    }
    return mergedMeetings;
}

function quickSort(array){
    var pivot = array[0];
    var lesser = [];
    var greater = [];
    for (var i = 1; i < array.length; i++){
        if(array[i] < pivot){
            lesser.push(array[i]);
        }
        else{
            greater.push(array[i]);
        }
    }
    return (quickSort(lesser).concat(pivot, quickSort(greater)));
}