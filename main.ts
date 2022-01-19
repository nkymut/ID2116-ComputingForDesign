function normalFace () {
    basic.showIcon(IconNames.Asleep)
}
function sadFace () {
    basic.showIcon(IconNames.Sad)
}
function happyFace () {
    basic.showIcon(IconNames.Happy)
}
let status = "happy"
basic.forever(function () {
    if (status == "happy") {
        happyFace()
    } else if (status == "sad") {
        sadFace()
    } else {
        normalFace()
    }
})
