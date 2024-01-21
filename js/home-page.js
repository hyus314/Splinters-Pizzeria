const showMoreAbout = document.getElementById('aboutShowMore');
const showMoreOrder = document.getElementById('orderShowMore');

showMoreAbout.addEventListener('click', function (ev) {
    ev.preventDefault();

    const textContent = ev.currentTarget.textContent;
    const aboutContainer = document.querySelector('.about-section-container');

    if (textContent === 'Show More') {
        aboutContainer.style.display = 'flex';
        ev.currentTarget.textContent = 'Hide';
    } else if (textContent === 'Hide') {
        aboutContainer.style.display = 'none';
        ev.currentTarget.textContent = 'Show More';
    }
});


showMoreOrder.addEventListener('click', function (ev) {
    ev.preventDefault();

    const textContent = ev.currentTarget.textContent;
    const aboutContainer = document.querySelector('.order-pizzas');

    if (textContent === 'Show More') {
        aboutContainer.style.display = 'flex';
        ev.currentTarget.textContent = 'Hide';
    } else if (textContent === 'Hide') {
        aboutContainer.style.display = 'none';
        ev.currentTarget.textContent = 'Show More';
    }
});
