$(document).ready(() => {
    /*
    $("#results").load("test.html", (responseTxt, statusTxt, xhr) => {
        if (statusTxt == "success") {
            alert("It went fine!")
            // $("#results").html(responseTxt)
        
        } else if (statusTxt == "error") {
            alert("Error " + xhr.statusText)
        }
    })
    */
    /*
     $.get("test.html", (data) => {
         $("#results").html(data)
     })
     */
    $.getJSON("users.json", data => {
        $.each(data, (i, user) => {
            $("#users").append(`<li>Full Name: ${user.firstName} ${user.lastName}</li>`)
        })
    })
})