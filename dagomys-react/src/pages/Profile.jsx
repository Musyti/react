import ProfileCard from "../components/ProfileCard";
import { useState } from "react";
import Post from "../components/Post";

function Profile(){
    const [posts, setPosts] = useState([
        {
            id: 1,
            text:"В Барнауле школьник принес учебник. Все были в шоке от...",
            title: "Секрет быстрого набора массы",
            author: "Eminem"
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
    <section>
        <h1>Профиль</h1>
        <ProfileCard />
        <div className="feed">
            <h2>Мои публикации</h2>
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

export default Profile;