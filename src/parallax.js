const parallax = document.querySelector('.parallax');
const layers = parallax.children;
const windowWidth = document.body.clientWidth;

function moveLayersDependingOnScroll(wScroll) {

    Array.from(layers).forEach((layer, index) => {
        console.log(index);
        const divider = layer.dataset.speed;
        const strafe = wScroll * divider / 10;

        layer.style.transform = `translateY(-${strafe}%)`;
        // console.log(layer.style.transform, index);
    });
}

window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;
    moveLayersDependingOnScroll(wScroll);
})