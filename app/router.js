import { baseURL } from "./constants.js"
import { User } from "./components/User.js";
import { Post } from "./components/Post.js";
import { Comment } from "./components/Comment.js";
import { container, getData } from "./utils.js";

export const Router = {
    getPosts: async () => {
        const posts = await getData(`${baseURL}/posts`);
        const PostData = posts.map(p => {
            const newPost = new Post(p);
            return newPost.render();
        }).join("")
        container.innerHTML = PostData
        root.append(container);
        Router.getComments();
    },
    getComments: async () => {
        const comments = await getData(`${baseURL}/comments`);
        const posts = document.querySelectorAll('.post-card');
        posts.forEach(p => {
            const box = p.querySelector('.comments-box');
            const postComments = comments.filter(c => c.postId == p.id.replace("post-",""))
            const commentsData = postComments.map(c => {
                const comment = new Comment(c);
                return comment.render()
            }).join("")
            box.innerHTML = commentsData
        })
    },
    getUserData: async (n) => {
        const users = await getData(`${baseURL}/users`);
        const currentUser = users.find(u => u.id == n);
        const UserData = new User(currentUser)
        container.innerHTML = UserData.profile()
    },
    getUserAlbums: async (n) => {
        const albums = await getData(`${baseURL}/albums`);
        console.log(albums);
    }
}