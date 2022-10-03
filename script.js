let seconds = 0
let minutes = 0
let hours = 0
let interval


function twoDigits(digit) {
    if(digit < 10) {
        return '0' + digit
    } else {
        return digit
    }
}


function start() {
    counter()
    interval = setInterval(counter, 1000)
}


function pause() {
    clearInterval(interval)
}


function stop() {
    clearInterval(interval)
    seconds = 0
    minutes = 0
    document.getElementById('watch').innerText = '00:00:00'
}

function counter() {
    seconds++
    if(seconds == 60) {
        minutes++
        seconds = 0

        if(minutes == 60) {
            minutes = 00
            hours++
        }
    }
    document.getElementById('watch').innerText = twoDigits(hours) + ':' + twoDigits(minutes) + ':' + twoDigits(seconds)
}