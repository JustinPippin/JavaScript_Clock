//We need a way to get tht ecurrent time and have that be updated each second.

//To do this, we are going to create a function that contains a timer ti call itself again each second.

function showTime() {
    var date = new Date(); //This gives us the current time

    var hour = date.getHours(); //Gives us a value from 0-23
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    var period = "AM";

    //We need to make sure hour is represented by 12 hr time. Also AM or PM
    //Anything between 12 PM - 12 AM is AM

    if (hour === 0) {
        period = "AM"
    } else if (hour >= 12) {
        period = "PM"
    }

    if (hour === 0) {
        hour = 12
    }

    if (hour > 12) {
        hour = hour - 12;
    }

    hour = (hour < 10) ? ("0" + hour) : hour; //If hour is less than 10, set hour equal to 0 plus the value of hour, otherwise, keep hour the same by setting it equal to itself

    //String to store current time
    var time = hour + ":" + minute + ":" + seconds + " " + period;

    document.getElementById("clockDisplay").innerText = time;

    console.log(time);

    setTimeout(showTime, 1000); //Schedule the showTime function to be called after 1000 ms (1 second)
 }
 showTime();