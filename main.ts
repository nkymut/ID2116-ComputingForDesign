function normalFace () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
}
function sadFace () {
    basic.showIcon(IconNames.Sad)
}
input.onButtonPressed(Button.B, function () {
    feed()
})
function feed () {
    hunger = hunger + 1
    if (hunger > 10) {
        hunger = 10
    }
    serial.writeValue("hunger", hunger)
}
function happyFace () {
    basic.showIcon(IconNames.Happy)
}
let hunger = 0
let status = "happy"
hunger = 10
basic.forever(function () {
    if (hunger < 3) {
        status = "sad"
    } else if (hunger >= 3 && hunger <= 6) {
        status = "normal"
    } else if (hunger < 6) {
        status = "happy"
    }
    if (status == "happy") {
        happyFace()
    } else if (status == "sad") {
        sadFace()
    } else if (status == "normal") {
        normalFace()
    }
})
loops.everyInterval(3000, function () {
    hunger = hunger - 1
    if (hunger < 0) {
        hunger = 0
    }
    serial.writeValue("hunger", hunger)
})
