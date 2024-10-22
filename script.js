
let dayNight = document.querySelector('.dayNight');
let banner = document.querySelector('.banner');

dayNight.addEventListener('click', () => {
   banner.classList.toggle("night");
});


let typingEffect = new TypingEffect({
    text: ['Web Developer', 'Designer', 'Freelancer'],
    delay: 100
    });