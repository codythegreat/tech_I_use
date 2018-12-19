const increaseOpacityContents = () => {
    currentOpacity = 0.0;
    let intervalIncreaseOpacityLeft = setInterval(function() {increaseOpacity()}, 50);
    let intervalIncreaseOpacityRight = setInterval(function() {increaseOpacity()}, 50);

    const increaseOpacity = () => {
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
};

const drawCanvasAnimations = () => {
    const canvas = document.getElementById("canvas-hardware");
    let ctx = canvas.getContext("2d");
    ctx.canvas.width  = window.innerWidth;
    let intervalCanvasHeight = setInterval(function() {
        increaseCanvasHeight();
    }, 2);
    const increaseCanvasHeight = () => {
        ctx.canvas.height += 5;
        ctx.beginPath();
        ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "#311";
        ctx.fill();
        let img = document.getElementById("canvas-img");
        ctx.drawImage(document.getElementById("canvas-img"), Math.floor(ctx.canvas.width/2), 0, Math.floor(ctx.canvas.width - ((img.naturalWidth/img.naturalHeight)*ctx.canvas.height)), ctx.canvas.height);
        if (ctx.canvas.height == 600) {
            clearInterval(intervalCanvasHeight);
        }
    }
}