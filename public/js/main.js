var slide = document.getElementById('slide');
var btns = document.querySelectorAll('.car-btn')
var nav = document.getElementsByTagName('nav')[0];
var partecipateButton = document.getElementById('savethedate');
var slidesHeight = 0;
const groomBride = `<div class="center center-container" id="groom-bride">
<img src="/images/alecatemain.png" id="image-holder" />
</div>`
const weddingDate = `<div class="center center-container">
<p class="center subtitle text-main-color">Annunciano con gioia il loro matrimonio</p>
</div>
<div>
<p class="center description text-main-color">Sabato 13 Luglio alle ore 16:30</p>
<div>
<p class="center address text-main-color">Parrocchia San Luigi Gonzaga</p>
</div>
<div class="center center-container">
<p class="center subtitle text-main-color">Via Brandani, 2 Pesaro (PU)</p>
</div>
</div>`
const party = `
<div class="center center-container">
<p class="center subtitle text-main-color">Dopo la cerimonia i festeggiamenti proseguiranno presso</p>
</div>
<div>
<p class="center party-place text-main-color">Villa "Tramonti"</p>
<div>
<p class="center address text-main-color">Via Pulzona, 3392 Saludecio (RN)</p>
</div>
</div>`

const slides = new Map()
slides.set("0", groomBride)
slides.set("1", weddingDate)
slides.set("2", party)

function reset() {
    for (let i = 0; i < slides.size; i++) {
        btns[i].classList.remove('expand');
    }
}

function animate(i) {
    btns[i].classList.add('expand');
}

function scrollTo(i) {
    reset();
    slide.innerHTML = slides.get(i);
    animate(i);
}


const activate = (e) => {
    if (e.target.matches('.car-btn')) {
        scrollTo(e.target.dataset.index)
    }
};

const init = () => {
    slidesHeight = document.getElementById('slide').clientHeight;
    slide = document.getElementById('slide');
    slide.style.height = `${slidesHeight + 10}px`;
    btns = document.querySelectorAll('.car-btn');
    nav = document.getElementsByTagName('nav')[0];
    nav.style.visibility = "hidden"
    partecipateButton = document.getElementById('savethedate');
    partecipateButton.style.visibility = "hidden"
    const imageHolder = document.getElementById("image-holder")
    imageHolder.classList.add("scale-out")
    setTimeout(() => {
        imageHolder.classList.add("scale-in")
    }, 2500);
    setTimeout(() => {
        nav.style.visibility = "visible"
        partecipateButton.style.visibility = "visible"
    }, 5200)
    animate(0)
};

function selectSlide() {
    var currentIndex = 0
    btns.forEach((btn, index) => {
        if (btn.classList.contains("expand")) {
            currentIndex = index
        }
    })
    currentIndex++;
    if (!slides.has(currentIndex.toString())) {
        currentIndex = 0
    }
    scrollTo(currentIndex.toString())
}

window.addEventListener('load', init, false);
window.addEventListener('click', activate, false);