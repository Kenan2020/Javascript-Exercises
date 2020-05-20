$(document).ready(() => {
    $("#btnFadeOut").click(() => {
        $("#box").fadeOut(2000, () => { //fast//slow
            $("#btnFadeOut").text("It's Gone")
        })
    })
    $("#btnFadeIn").click(() => {
        $("#box").fadeIn(2000, () => { //fast//slow
            $("#btnFadeIn").text("It's Gone")
        })
    })
    $("#btnFadeTog").click(() => {
        $("#box").fadeToggle(2000, () => { //fast//slow
            $("#btnFadeOut").text("It's Gone")
        })
    })
    $("#btnSlideUp").click(() => {
        $("#box").slideUp(2000)
    })
    $("#btnSlideDown").click(() => {
        $("#box").slideDown(2000)
    })
    $("#btnSlideTog").click(() => {
        $("#box").slideToggle(2000)
    })
    $("#btnStop").click(() => {
        $("#box").stop(2000)
    })
    $("#moveLeft").click(() => {
        $("#box2").animate({
            left: 0,
            height: "100px",
            width: "100px",
            opacity: "1"
        })
    })
    $("#moveRight").click(() => {
        $("#box2").animate({
            left: 200,
            height: "300px",
            width: "300px",
            opacity: ".5"
        })
    })
    $("#moveAround").click(() => {
        let box = $("#box2")
        box.animate({
            left: 300
        })
        box.animate({
            top: 300
        })
        box.animate({
            left: 0
        })
        box.animate({
            top: 0
        })
    })

})