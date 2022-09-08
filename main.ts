let Y = 0
let ר = 0
basic.forever(function () {
    Y = randint(0, 4)
    for (let index = 0; index <= 4; index++) {
        led.plot(Y, index)
        basic.pause(150)
        led.unplot(Y, index)
    }
})
basic.forever(function () {
    ר = randint(0, 4)
    for (let index = 0; index <= 4; index++) {
        led.plot(ר, index + 1)
        basic.pause(150)
        led.unplot(ר, index + 1)
    }
})
