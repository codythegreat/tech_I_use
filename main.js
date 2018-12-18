document.getElementById("nav-top").addEventListener(onmouseover, function() {
    currentOpacity = 0.0;
    let intervalIncreaseOpacityLeft = setInterval(function() {increaseOpacity("content-left")}, 30);
    let intervalIncreaseOpacityRight = setInterval(function() {increaseOpacity("content-right")}, 30);

    const increaseOpacity = (domElement) => {
        document.getElementById("content-left").style.opacity = `${currentOpacity}`;
        document.getElementById("content-right").style.opacity = `${currentOpacity}`;
        if (currentOpacity == 1) {
            currentOpacity = 0;
            clearInterval(intervalIncreaseOpacityLeft);
            clearInterval(intervalIncreaseOpacityRight);
        } else {
            currentOpacity += .01
        }
    }
});