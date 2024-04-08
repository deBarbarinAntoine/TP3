// Create a timeline for the animation
const fireTimelineAnim = gsap.timeline({ repeat: -1, paused: true });

// setting the fire values
const fireFrameNb = 120;
const heightOfFireFrame = 46680/fireFrameNb;

// loop through the fire frames
for (let i = 0; i < fireFrameNb; ++i) {
    const yFirePosition = -i * heightOfFireFrame;
    fireTimelineAnim.to('.fire-img', { backgroundPosition: `0px ${yFirePosition}px`, duration: 0.042, ease: 'steps(1)' }, `frame-${i}`);
}

// start the fire animation: enjoy!
fireTimelineAnim.play();