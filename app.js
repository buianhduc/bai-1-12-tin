var follow = document.getElementById("follow")
var body = document.getElementById("html")

function ascii(n){
    return n.charCodeAt(0)
}
var rng = Math.floor(Math.random()*26) + 65
function rngUpdate(){
    rng = Math.floor(Math.random()*26) + 65
}

var points = 0;
follow.innerHTML = String.fromCharCode(rng)

$(document).ready(function(){
    $(window).keyup(function(event){
        console.log(event.keyCode)
        var keyPressed = event.keyCode;
        if(keyPressed == rng){
            console.log(points)
            $("#result").html("Chính xác")
            points += 1 
        }
        else{
            console.log(points)
            $("#result").html("Sai rồi")
            points = 0
        }
        
        $("#points").html("Số điểm: " + points.toString())
        rngUpdate();
        console.log(rng)
        $("#follow").html(String.fromCharCode(rng))
    });
})
