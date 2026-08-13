/** IIFE (Inmediatly Invoked Function Expression) */
(() => document.addEventListener('DOMContentLoaded', () => {
    /**  Galeria de Imagenes*/
    const galleries = document.querySelectorAll('.gallery');
    // Funciones de utilidad
    function getElement(array, search = 'active'){
        for(let i = 0; i < array.length; ++i)
        if (array[i].classList.contains(search)) {
            array[i].classList.remove(search);
            return i;
    }}
    function prevElement(array){
        const current = getElement(array);
        const newElement = current <= 0 ? array.length - 1 : current - 1;
        array[newElement].classList.add('active');
        return
    }
    function nextElement(array){
        const current = getElement(array);
        const newElement = current < array.length - 1 ? current + 1 : 0;
        array[newElement].classList.add('active');
        return
    }
    function setElement(array, index){
        getElement(array);
        array[index].classList.add('active');
        return
    }
    // Eventos de Galeria
    galleries.forEach(g => {
        const prev = g.querySelector('.prev');
        const next = g.querySelector('.next');
        const images = g.querySelectorAll('.gallery-item');
        const controls = g.querySelectorAll('.gallery-controllers button');
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
}))()