import { useState } from "react";
import Post from "./Post"

function ProfileCard(props) {
const [posts, setPosts] = useState([
    {
        id: 1,
        text:"В Барнауле школьник принес учебник. Все были в шоке от...",
        title: "Секрет быстрого набора массы",
        author: "Eminem"
    },
    {
        id: 2,
        text:"Я хотел сказать всем вам, что динозавры вернутся в Малый Таганрог",
        title: "Мое лето",
        author: "Jay-Z"
    },
    {
        id: 3,
        text:"Скиньте 5 рублей пжпж",
        title: "Срочная хелпа нужна",
        author: "Вась"
    },
    {
        id: 4,
        text:"lorem upsum",
        title: "Hello",
        author: "Oppo"
    },
    {
        id: 5,
        text:"lorem upsum",
        title: "Hello",
        author: "Oppo"
    },
    {
        id: 6,
        text:"lorem upsum",
        title: "Hello",
        author: "Oppo"
    },
    {
        id: 7,
        text:"lorem upsum",
        title: "Hello",
        author: "Oppo"
    }

]);

const [title, setTitle] = useState("");
const [text, setText] = useState("");

function addPost(event) {
    event.preventDefault();

    const newPost = {
        id: Date.now(),
        title: title,
        text: text,
        author: "Крутыш"
    };
    setPosts([...posts, newPost]);
    setTitle("");
    setText("");
}

function deletePost(id) {
    setPosts(posts.filter((post) => post.id !== id));
}
    return (
        <section className="profile-card">
            <div className="profile"> 
                <div className="avatar">icon</div>
                <div className = "profile-info">
                    <h2>{props.author}</h2>
                    <p>{props.tag}</p>
                </div>
                <form className="post-form" onSubmit={addPost}>
                    <input type="text" placeholder="Заголовок" value={title} onChange={(event) => setTitle(event.target.value)}/>
                    <textarea placeholder="Текст поста" value={text} onChange={(event) => setText(event.target.value)}></textarea>
                    <button type="submit">Опубликовать</button>
                </form>
            </div>
            {posts.map((post) => (
                <Post key={post.id} 
                id = {post.id}
                author = {post.author} 
                title={post.title} 
                text={post.text} 
                onDelete={deletePost}/>
            ))}
        </section>
    )
}

export default ProfileCard