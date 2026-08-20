function Clock () {
    const copy = document.getElementById('copy');
    copy.innerHTML = `
        <span class="fs-30">&copy;${new Date().getFullYear()}</span>
        Todos los derechos reservados | 
        <br>
        Cristian Racedo &amp; Compañia
        <br>
        <span id="time" class="fs-20"></span>`;
    let timer = setInterval(() => {
        const clock = new Date();
        const HH = clock.getHours();
        const mm = clock.getMinutes();
        const ss = clock.getSeconds();
        time.innerText = `${HH}:${mm}:${ss}`
        copy.append(time);    
    }, 1000)
    let clearClock = setTimeout( () => {
        clearInterval(timer);
    }, 4000)
}
export default Clock;