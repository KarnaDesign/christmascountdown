/**
 * http://stackoverflow.com/a/1527820
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showQuote()
{
    var randomNumber = getRandomInt(1, 10);
    var id = "quote" + randomNumber;
    var quote = document.getElementById(id);
    quote.style.display = "block";
}

function addZero(val)
{
    if(val < 10)
    {
        val = "0" + val;
    }
    
    return val;
}

function setTime()
{
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    
    var now = new Date();
    var year = now.getFullYear();
    if(now.getMonth() === 11 && now.getDate() > 25)
    {
        year++;
    }
    var christmas = new Date(year, 11, 25, 0, 0, 0); //december, 25:e, midnatt
    
    var difference = christmas - now; //getting the remaining time between christmas and current (in milliseconds).
    var remainingDays = Math.floor(difference / day);
    var remainingHours = Math.floor((difference % day) / hour);
    var remainingMinutes = Math.floor((difference % hour) / minute);
    var remainingSeconds = Math.floor((difference % minute) / second);
    
   
    if(remainingDays < 100)
    {
        remainingDays = "0" + remainingDays;
    }
    
    remainingDays = addZero(remainingDays);
    remainingHours = addZero(remainingHours);
    remainingMinutes = addZero(remainingMinutes);
    remainingSeconds = addZero(remainingSeconds);
    
    document.getElementById("days").textContent = remainingDays;
    document.getElementById("hours").textContent = remainingHours;
    document.getElementById("minutes").textContent = remainingMinutes;
    document.getElementById("seconds").textContent = remainingSeconds;
    
    setTimeout(setTime, 1000); //setTimeout=calls a function after a specified amount of time.
    
}

document.addEventListener("deviceready", function()
{
    setTime();
    showQuote();
});


