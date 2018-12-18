document.getElementById("nav-top").addEventListener(onmouseover, function() {
    currentOpacity = 0;
    let intervalIncreaseOpacityLeft = setInterval(function() {increaseOpacity("content-left")}, 10);
    let intervalIncreaseOpacityRight = setInterval(function() {increaseOpacity("content-right")}, 10);

    const increaseOpacity = (domElement) => {
        document.getElementById(domElement).style.opacity = currentOpacity;
        if (currentOpacity == 1) {
            currentOpacity = 0;
            clearInterval(intervalIncreaseOpacityLeft);
            clearInterval(intervalIncreaseOpacityRight);
        } else {
            currentOpacity += .01
        }
    }
});