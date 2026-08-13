import { prevElement, nextElement, setElement } from "./arrayHandlers.js";
function Gallery () {
    document.querySelectorAll('.gallery').forEach(gallery => {
        const prev = gallery.querySelector('.prev');
        const next = gallery.querySelector('.next');
        const images = gallery.querySelectorAll('.gallery-item');
        const controls = gallery.querySelectorAll('.gallery-controllers button');
        // Botones de accion
        prev.addEventListener('click', () => {
            prevElement(images);
            prevElement(controls);
        });
        next.addEventListener('click', () => {
            nextElement(images);
            nextElement(controls);
        });
        controls.forEach((ctl,idx) => ctl.addEventListener('click', () => {
            setElement(images, idx);
            setElement(controls, idx);
        }));
    })
}
export default Gallery;