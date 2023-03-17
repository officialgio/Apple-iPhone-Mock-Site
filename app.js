// Nav
const tlIntro = gsap.timeline({
    scrollTrigger: {
        trigger: '.first__page',
        start: '50%',
        scrub: true,
        pin: true,
        pinSpacing: false
        // markers: true
    },
});

tlIntro.fromTo('nav', { opacity: 1 }, { opacity: 0, duration: 1 });

/**
 * Have text change opacity on scroll
 */
const tlH = gsap.timeline({
    scrollTrigger: {
        trigger: '.second__page',
        markers: { startColor: 'blue', endColor: 'blue' },
        scrub: true, 
        start: '-40%',
        end: '40%',
    },
});

tlH.fromTo('.highlight', { color: 'rgba(255, 255, 255, 0.4)' }, { color: 'rgba(255, 255, 255, 1)', stagger: 1 });

const tlHRemove = gsap.timeline({
    scrollTrigger: {
        trigger: '.second__page',
        markers: { startColor: 'pink', endColor: 'pink' },
        scrub: true, 
        start: '-20%',
        end: '60%',
    },
});

tlHRemove.to('.highlight', { color: 'rgba(255, 255, 255, 0.4)', stagger: 1 });


// Page 3
const tlSplit = gsap.timeline({
    scrollTrigger: {
        trigger: '.third__page',
        start: '-25%',
        end: '30%',
        scrub: true,
    },
});

tlSplit.fromTo('.large-phone', { x: '40%' }, { x: '20%' });
tlSplit.fromTo('.small-phone', { x: '-40%' }, { x: '-20%' }, '<');
tlSplit.fromTo('.product-text-left', { x: 50, opacity: 0 }, { opacity: 1, x: -100 }, '<');
tlSplit.fromTo('.product-text-right', { x: -50, opacity: 0 }, { opacity: 1, x: 100 }, '<');

const tlSplitPen = gsap.timeline({
    scrollTrigger: {
        trigger: '.third__page',
        pin: true,
        pinSpacing: false,
        start: '0%',
        end: '100%',
    }
})

// Carousel Page
const swatches = document.querySelectorAll('.swatches img');
const gallery = document.querySelector('.phone-gallery');
const slides = document.querySelectorAll('.phone-gallery__container');

let currentSwatch = 'blue';
let topIndex = 2;
/**
 * Loop through every clickable swatch 
 * Get the current left coordinate of the each individual phone image in the gallery
 * Get the attribute when clicked on the swatch and then get the class which are attached to the right images
 * Use the class elemenet to set a higher index to be visible,
 * Have an opacity effect
 * and move the gallery to the left using the coordinates.
 * Ensure to have topIndex incremented to avoid bug.
 */
swatches.forEach((swatch, index) => {
    const coord = slides[index].getBoundingClientRect().left;
    swatch.addEventListener('click', (e) => {
        // get the corresponding swatch
        let swatchName = e.target.getAttribute('swatch');
        let closeUp = document.querySelector('.' + swatchName);

        // Fix clicking on the same swatch
        if (currentSwatch === swatchName) return;

        // set z-index and increment it
        gsap.set(closeUp, { zIndex: topIndex });
        gsap.fromTo(closeUp, { opacity: 0 }, { opacity: 1, duration: 1 });
        
        // Gallery 
        gsap.to(gallery, { x: -coord, duration: 1, ease: 'back.out(1)' });

        currentSwatch = swatchName;
        topIndex++;
    });
});


// Fifth Page

/**
 * Have the video play on scroll using currentTime from 0 to the length of the video.
 * Set an opacity effect for the text.
 * Ensure to have a pin with an end of 150% for a longer video view on scroll.
 */
const tlVideo = gsap.timeline({ 
    scrollTrigger: {
        trigger: '.fifth__page',
        start: '0%',
        end: '150%',
        scrub: true,
        markers: { start: 'green', end: 'green' },
        pin: true,
    },
});

tlVideo.fromTo('.product-video', { currentTime: 0 }, { currentTime: 3, duration: 1 });
tlVideo.fromTo('.product-info__container h3', { opacity: 0 }, { opacity: 1, stagger: 0.25, duration: 0.5 }, '<');


// Sixth Page
const tlParallax = gsap.timeline({
    scrollTrigger: {
        trigger: '.sixth__page',
        start: '-20%',
        end: '50%',
        scrub: true,
        markers: {  start: 'yellow', end: 'yellow' },
    },
}); 

tlParallax.fromTo('.photo__description', { y: 0 }, { y: -80 });
tlParallax.fromTo('.portrait__container', { y: 0 }, { y: -80 }, '<');
tlParallax.fromTo('.phone-video', { y: 0 }, { y: -100 }, '<');
