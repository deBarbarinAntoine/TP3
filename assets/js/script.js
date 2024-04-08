// Create a timeline for the animation
const fireTimelineAnim = gsap.timeline({ repeat: -1, paused: true });
const icecubeTimelineAnim = gsap.timeline({ repeat: -1, paused: true });

// setting the fire values
const fireFrameNb = 120;
const heightOfFireFrame = 46680/fireFrameNb;

// setting the icecube values
const icecubeFrameNb = 132;
const heightOfIcecubeFrame = 39864/icecubeFrameNb;

// loop through the fire frames
for (let i = 0; i < fireFrameNb; ++i) {
    const yFirePosition = -i * heightOfFireFrame;
    fireTimelineAnim.to('.fire-img', { backgroundPosition: `0px ${yFirePosition}px`, duration: 0.042, ease: 'steps(1)' }, `frame-${i}`);
}

// loop through the icecube frames
for (let i = 0; i < icecubeFrameNb; ++i) {
    const yIcecubePosition = -i * heightOfIcecubeFrame;
    icecubeTimelineAnim.to('.icecube-img', { backgroundPosition: `0px ${yIcecubePosition}px`, duration: 0.042, ease: 'steps(1)' }, `frame-${i}`);
}

// start the fire animation: enjoy!
fireTimelineAnim.play();

// start the icecube animation: enjoy!
icecubeTimelineAnim.play();