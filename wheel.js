function spinAnimation() {
    var wheel = document.getElementById("wheel");
    var rotate_by_deg = Math.floor(Math.random() * 360);
    var duration = Math.floor(rotate_by_deg * 0.05);

    console.log("Rotate by ", rotate_by_deg, " degrees over a period of ", duration, " seconds")
    
    wheel.style.transform = "rotate(" + rotate_by_deg + "deg)";
    wheel.style.transitionDuration = duration + "s";

    document.getElementById("spin").disabled = true;
}

function resetWheel() {
    var wheel = document.getElementById("wheel");

    wheel.style.transform = "rotate(0deg)";
    wheel.style.transitionDuration = "0s";
}