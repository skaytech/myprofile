const year = new Date().getFullYear();
document.querySelector('#year').textContent = year;

// Smooth Scrolling
$("#main-nav a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function() {

            window.location.hash = hash;
        });
    }
});

// Stagger Length
const sl = 0.2;
// Delay lenght
const dl = 0.5;

// Create new timeline
let tl = gsap.timeline({ repeat: -1 });

// Languages
tl.from('#title1', { opacity: 0, duration: 1, ease: "bounce.out", delay: dl })
    .from('.lang-col-1', { x: -150, opacity: 0, stagger: sl, ease: "power1.in" })
    .from('.lang-col-2', { x: 150, opacity: 0, stagger: sl, ease: "power1.in" })
    .addLabel("fade1", "+=5")
    .to('.lang-col-1', { x: -150, opacity: 0, stagger: sl, ease: "power1.in" }, "fade1")
    .to('.lang-col-2', { x: 150, opacity: 0, stagger: sl, ease: "power1.in" }, "fade1")
    .to('#title1', { opacity: 0, duration: 1, ease: "power1.in" }, "fade1")

// Databases/Libaries
tl.from('#title2', { opacity: 0, duration: 1, ease: "bounce.out", delay: dl })
    .from('.db-col-1', { x: -100, opacity: 0, stagger: 0.2, ease: "power1.in" })
    .from('.db-col-2', { x: 100, opacity: 0, stagger: 0.2, ease: "power1.in" })
    .addLabel("fade2", "+=5")
    .to('.db-col-1', { x: -100, opacity: 0, stagger: 0.2, ease: "power1.in" }, "fade2")
    .to('.db-col-2', { x: 100, opacity: 0, stagger: 0.2, ease: "power1.in" }, "fade2")
    .to('#title2', { opacity: 0, duration: 1, ease: "power1.in" }, "fade2");

//Alter skills section titles on smaller screens
const title1 = document.getElementById('title1');
const title2 = document.getElementById('title2');

if (window.innerWidth < 501) {
    title1.innerHTML = 'Languages';
    title2.innerHTML = 'Databases';
}