export function getElement(array, search = 'active'){
    for(let i = 0; i < array.length; ++i)
    if (array[i].classList.contains(search)) {
        array[i].classList.remove(search);
        return i;
}}
export function prevElement(array){
    const current = getElement(array);
    const newElement = current <= 0 ? array.length - 1 : current - 1;
    array[newElement].classList.add('active');
    return
}
export function nextElement(array){
    const current = getElement(array);
    const newElement = current < array.length - 1 ? current + 1 : 0;
    array[newElement].classList.add('active');
    return
}
export function setElement(array, index){
    getElement(array);
    array[index].classList.add('active');
    return
}