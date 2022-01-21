let c = document.getElementById("my-canvas");
console.log(c);
let ctx = c.getContext("2d");

let loadImage = (src, callback) => {
    let image = new Image();
    image.src = src;
    image.onload = () => callback(image);
    return image;
}

let frames = {
    idle: [1,2,3,4,5,6,7,8],
    kick: [1,2,3,4,5,6,7],
    punch: [1,2,3,4,5,6,7],
}

let getImagePath = (frameNumber, animation) => {
    return '/images/' + animation + '/' + frameNumber + '.png';
}

let loadImages = (callback) => {
    let images = {
        idle: [],
        kick: [],
        punch: []
    };
    let imagesToLoad = 0;

    ['idle', 'kick', 'punch'].forEach((animation) => {
        let animationFrames = frames[animation];
        imagesToLoad = imagesToLoad + animationFrames.length;

        animationFrames.forEach((frameNumber) => {
            let path = getImagePath(frameNumber, animation);

            loadImage(path, (img) => {
                images[animation][frameNumber - 1] = img;
                imagesToLoad = imagesToLoad - 1;

                if (imagesToLoad === 0) {
                    callback(images);
                }
            })
        })
    })
}

let animate = (ctx, images, animation, callback) => {
    images[animation].forEach((image, index) => {
        setTimeout(() => {
            ctx.clearRect(0, 0, 500, 500);
            ctx.drawImage(image, 0, 0, 500, 500);
        }, index * 100);
    });

    setTimeout(callback, images[animation].length * 100);
}

loadImages((images) => {
    let queue = [];
    let aux = () => {
        let selectedAnimation;
        if (queue.length === 0) {
            selectedAnimation = 'idle';
        }else{
            selectedAnimation = queue.shift();
        }
        animate(ctx, images, selectedAnimation, aux);
    }
    aux();

    document.getElementById('kick').addEventListener('click', () => {
        queue.push('kick');
    })
    document.getElementById('punch').addEventListener('click', () => {
        queue.push('punch');
    })
})