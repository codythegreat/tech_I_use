const itemPositions = [[.15, .2],[.25, .5],[.44, .75],[.80, .2],[.70, .5],[.72, .8]];
const canvas = document.getElementById("canvas-hardware");
const ctx = canvas.getContext("2d");

const increaseOpacityContents = () => {
    currentOpacity = 0.0;
    let intervalIncreaseOpacityLeft = setInterval(function() {increaseOpacity()}, 50);
    let intervalIncreaseOpacityRight = setInterval(function() {increaseOpacity()}, 50);

    const increaseOpacity = () => {
        document.getElementById("content-left").style.opacity = `${currentOpacity}`;
        document.getElementById("content-right").style.opacity = `${currentOpacity}`;
        if (currentOpacity == 1) {
            clearInterval(intervalIncreaseOpacityLeft);
            clearInterval(intervalIncreaseOpacityRight);
        } else {
            currentOpacity += .01
        }
    }
};

const drawCanvasImage = () => {
    let img = document.getElementById("canvas-img");
    
    //Dynamic Canvas Resizing
    if (img.naturalWidth >= window.innerWidth) {
        ctx.canvas.width = window.innerWidth*.8;
    } else {
        ctx.canvas.width = img.naturalWidth;
    }
    ctx.canvas.height = ctx.canvas.width * (img.naturalHeight/img.naturalWidth);
    ctx.fillStyle = "#54A9FF";
    ctx.drawImage(document.getElementById("canvas-img"),
        0,
        0,
        ctx.canvas.width,
        ctx.canvas.height); 
};

const drawCanvasItemRects = () => {
    for (let position of itemPositions) {
        ctx.fillRect(
            Math.floor(ctx.canvas.width*position[0]),
            Math.floor(ctx.canvas.height*position[1]),
            15,
            15
        )
    }
};


const drawCanvasAnimation = () => {
    for (let position of itemPositions) {
        let destination;
        if (position[0] <= .5) {
            destination = .04; //canvas far left
        } else {
            destination = .96; //canvas far right
        }
        ctx.fillRect(Math.floor(ctx.canvas.width*destination),
                     Math.floor(ctx.canvas.height*position[1]),
                     Math.floor((ctx.canvas.width*position[0])-(ctx.canvas.width*destination)),
                     3)
        ctx.fillRect(Math.floor(ctx.canvas.width*destination),
                     Math.floor(ctx.canvas.height*position[1]),
                     4,
                     Math.floor(ctx.canvas.height*(1-position[1])))
    }
};

window.addEventListener("resize", function() {
    drawCanvasImage();
    drawCanvasItemRects();
    drawCanvasAnimation();
});