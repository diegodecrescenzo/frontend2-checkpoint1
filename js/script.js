
let btnSubmit = document.querySelector('[data-submit]')

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    let cards = document.querySelector('.cards');

    let title = document.querySelector('[data-title]');
    let text = document.querySelector('[data-text]');
    let url = document.querySelector('[data-url]');

    let card = `       
        <div class="card">
        <h3 class="title">${title.value}</h3>
        <p class="text">${text.value}</p>
            <div class="circle">
            <img class="img-card" src="${url.value}" alt="${text.value}">
            </div>
        </div>
    `
    cards.innerHTML += card;

    title.value = "";
    text.value = "";
    url.value = "";   

    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 400
    })
})
