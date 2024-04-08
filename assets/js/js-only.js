let imgAnim = document.querySelector('.fire-img');
const heightOfAFrame = 46680/120;
let translate = 0;

// function to shift frame every 41ms.
function imgFrameAnimation() {
    setTimeout(() => {
        translate = (heightOfAFrame + translate) % 46680;
        imgAnim.style.backgroundPositionY = `-${translate}px`;
        imgFrameAnimation();
    }, 41);
}

// begin animation: enjoy!
imgFrameAnimation();
