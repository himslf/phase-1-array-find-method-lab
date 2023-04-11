// code your solution here

function superbowlWin(record){
    let win = record.find(function(object){
        return object.result === "W";
    });
    
    if (win){
        return win.year;
    } else {
        return undefined;
    }
 }