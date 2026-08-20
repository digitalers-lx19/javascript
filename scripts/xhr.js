function getData () {
    const path = "/assets/request/";
    const links = document.querySelectorAll('nav a');
    links.forEach(a => a.addEventListener('click', (event) => {
        event.preventDefault();// Evita el comportamiento por defecto (recarga)
        const url = event.target.href.split("/");
        const uri = url[url.length - 1];
        history.pushState('','',uri);
        fetchData({
            url: `${path}/${uri}.txt`,
            callback: (data) => document.querySelector('main').innerHTML = data
        });
    }))
    const fetchData = ({method = "GET", url = "/", callback = console.log}) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == 4) {
            if (xhr.status >= 400) return fetchData({url:`${path}/ERROR.txt`, callback});
            return callback(xhr.responseText);
        }})
        xhr.send();
    }
}
export default getData