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
                <p className="profile-description"></p>
            </div>
        </section>
    )
}

export default ProfileCard