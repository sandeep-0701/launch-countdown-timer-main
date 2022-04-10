const countDown = () => {
    const date = new Date("May 30,2022 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = date - now
    
    const sec = 1000
    const min = sec * 60
    const hours = min * 60
    const days = hours * 24
    let timeDays = Math.floor(diff / days);
    let timeHours = Math.floor((diff % days)/ hours);
    let timeMin = Math.floor((diff % hours)/ min);
    let timeSec = Math.floor((diff % min)/ sec);

    timeDays = timeDays<10 ? "0"+ timeDays : timeDays
    timeHours = timeHours<10 ? "0"+ timeHours : timeHours
    timeMin = timeMin<10 ? "0"+ timeMin : timeMin
    timeSec = timeSec<10 ? "0"+ timeSec : timeSec


    document.getElementById("days").innerHTML = timeDays
    document.getElementById("hours").innerHTML = timeHours
    document.getElementById("min").innerHTML = timeMin
    document.getElementById("sec").innerHTML = timeSec

}

setInterval(countDown,1000)
