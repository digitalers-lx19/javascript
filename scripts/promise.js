export const fetchData = async () => {
    try{
        const baseURL = `https://jsonplaceholder.typicode.com`
        let posts = await fetch(`${baseURL}/posts`);
        posts = await posts.json();
        posts.forEach(async (p) => {
            let comments = await fetch(`${baseURL}/comments?postId=${p}`)
            comments = await comments.json();
            console.log({...p, comments})
        })
    }
    catch(err) {
        console.error("ha ocurrido un error", err);
    }
}