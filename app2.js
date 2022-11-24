// const music = document.querySelector(".emo");
// const audio = document.querySelector('#music');
// const counter = document.querySelector('.number');

// audio.volume = 0;

// function setVolumeLevel(obj) {
//     let viewportHeight = window.innerHeight;

//     if (obj.getBoundingClientRect().bottom < viewportHeight) {
//         direction = 'decrease'
//     } else {
//         direction = 'increase'
//     }

//     console.log(obj.getBoundingClientRect().top, obj.getBoundingClientRect().bottom)

//     if (direction == 'increase') {
//         let objInViewHeight = viewportHeight - obj.getBoundingClientRect().top;
//         let volLevel = objInViewHeight / viewportHeight;
//         if (volLevel < 0) volLevel = 0;
//         if (volLevel > 1) volLevel = 1;
//         obj.volume = volLevel;
//     }
//     if (direction == 'decrease') {
//         let objInViewHeight = obj.getBoundingClientRect().bottom;
//         let volLevel = objInViewHeight / viewportHeight;
//         if (volLevel < 0) volLevel = 0;
//         if (volLevel > 1) volLevel = 1;
//         obj.volume = volLevel;
//     }

// }


// window.addEventListener('scroll', () => {
//     setVolumeLevel(music);
//     audio.volume = music.volume;
//     counter.innerHTML = audio.volume;
// })

// gsap.to(music, {
//     scrollTrigger: {
//         trigger: music,
//         start: "top bottom",
//         end: `bottom top`,
//         markers: true,
//         fastScrollEnd: true,
//         onEnter: () => audio.play(),
//         onLeave: () => audio.pause(),
//         onEnterBack: () => audio.play(),
//         onLeaveBack: () => {
//             audio.pause();
//         },
//     },
// })

const counter = document.querySelector('.number');
const emoBlock1 = document.querySelector(".emo_1");
const emoBlock2 = document.querySelector(".emo_2");
const emoBlock3 = document.querySelector(".emo_3");

const musicBlocks = document.querySelectorAll('.__music-block');
musicBlocks.forEach((block) => music(block));

// music(emoBlock1);
// music(emoBlock2);
// music(emoBlock3);


function music(musicBlock) {
    const audio = musicBlock.querySelector('.audio');

    counter.before(audio)
    audio.volume = 0;

    function setVolumeLevel(obj) {
        let viewportHeight = window.innerHeight;

        if (obj.getBoundingClientRect().bottom < viewportHeight) {
            direction = 'decrease'
        } else {
            direction = 'increase'
        }

        console.log(obj.getBoundingClientRect().top, obj.getBoundingClientRect().bottom)

        if (direction == 'increase') {
            let objInViewHeight = viewportHeight - obj.getBoundingClientRect().top;
            let volLevel = objInViewHeight / viewportHeight;
            if (volLevel < 0) volLevel = 0;
            if (volLevel > 1) volLevel = 1;
            obj.volume = volLevel;
        }
        if (direction == 'decrease') {
            let objInViewHeight = obj.getBoundingClientRect().bottom;
            let volLevel = objInViewHeight / viewportHeight;
            if (volLevel < 0) volLevel = 0;
            if (volLevel > 1) volLevel = 1;
            obj.volume = volLevel;
        }

    }


    window.addEventListener('scroll', () => {
        setVolumeLevel(musicBlock);
        audio.volume = musicBlock.volume;
        counter.textContent = audio.volume;
    })

    gsap.to(musicBlock, {
        scrollTrigger: {
            trigger: musicBlock,
            start: "top bottom",
            end: `bottom top`,
            markers: true,
            fastScrollEnd: true,
            onEnter: () => audio.play(),
            onLeave: () => audio.pause(),
            onEnterBack: () => audio.play(),
            onLeaveBack: () => {
                audio.pause();
            },
        },
    })

}