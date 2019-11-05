const parallax = document.querySelector('.parallax');
const layers = parallax.children;
const windowWidth = document.body.clientWidth;

function moveLayersDependingOnScroll(wScroll) {

    Array.from(layers).forEach((layer, index) => {
        const divider = layer.dataset.speed;
        const strafe = wScroll * divider / 10;

        layer.style.transform = `translateY(-${strafe}%)`;
    });
}

window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;
    moveLayersDependingOnScroll(wScroll);
})