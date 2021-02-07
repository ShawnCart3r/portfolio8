var today = new Date()
    var curHr = today.getHours()

    if (curHr >= 6 && curHr < 12) {
        document.getElementById("greet").innerHTML = 'Morning';
    } else if (curHr >= 12 && curHr < 17) {
        document.getElementById("greet").innerHTML = 'Afternoon';
    } else {
        document.getElementById("greet").innerHTML = 'Evening';
    }