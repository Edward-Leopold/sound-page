const music = document.querySelector(".emo");
const counter = document.querySelector('.counter');
music.volume = 0;


let isVisible = (target) => {
    // Все позиции элемента
    let targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (
        targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    ) {
        console.clear();
        console.log('Вы видите элемент :)');
    } else {
        console.clear()
    };
};

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

function getVolLevel(musicBlock) {
    // let pageHeight = Math.max(
    //     document.body.scrollHeight, document.documentElement.scrollHeight,
    //     document.body.offsetHeight, document.documentElement.offsetHeight,
    //     document.body.clientHeight, document.documentElement.clientHeight
    // );
    // let blockHeight = musicBlock.getBoundingClientRect().height;
    // let scrollHeight = window.pageYOffset;
    // let blockScrollHeight = musicBlock.offsetTop;
    // let blockScrollHeightNoSelfHeight = blockScrollHeight - blockHeight;



    if (scrollHeight >= blockScrollHeightNoSelfHeight) {
        console.log("In viewport!");

        // musicBlock.play();
        let blockInViewHeight = scrollHeight - blockScrollHeightNoSelfHeight;
        console.log(blockInViewHeight, blockHeight)
        if (blockInViewHeight <= blockHeight) {
            let volumeLevel = blockInViewHeight / blockHeight;
        }
    }
    return window.pageYOffset / pageHeight;
}

window.addEventListener('scroll', (e) => {
    // console.log(document.documentElement.offsetHeight)
    // console.log(window.pageYOffset)
    setVolumeLevel(music)
    counter.innerHTML = music.volume;
    // music.volume = getVolLevel(music);
    //console.log(music.volume)
})