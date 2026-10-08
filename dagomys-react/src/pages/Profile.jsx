import ProfileCard from "../components/ProfileCard";
import { useState, useEffect } from "react";
import Post from "../components/Post";

function Profile() {
  // const [posts, setPosts] = useState([
  //   {
  //     id: 1,
  //     text: "В Барнауле школьник принес учебник. Все были в шоке от...",
  //     title: "Секрет быстрого набора массы",
  //     author: "Eminem",
  //   },
  // ]);
  const [posts, setPosts] = useState( () => 
  {
    const savedPosts = localStorage.getItem("posts");
    if (savedPosts) {
      return JSON.parse(savedPosts)
    }
  
    
    return [
    {
      id: 1,
      text: "В Барнауле школьник принес учебник. Все были в шоке от...",
      title: "Секрет быстрого набора массы",
      author: "Eminem",
    },
  ]
});
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  // useEffect(() => {
  //   console.log("Изменились посты")
  // }, [posts]);
  useEffect(() => {
    localStorage.setItem(
      "posts",
      JSON.stringify(posts)
    );
  }, [posts]);

  function addPost(event) {
    event.preventDefault();
    if (!title.trim() && !text.trim()) return;

    const newPost = {
      id: Date.now(),
      title: title,
      text: text,
      author: "Крутыш",
    };
    setPosts([newPost, ...posts]);
    setTitle("");
    setText("");
  }

  function deletePost(id) {
    setPosts(posts.filter((post) => post.id !== id));
  }

  function deleteAllPost() {
    setPosts([])
  }

  return (
    <div style={{ width: "100%", maxWidth: "600px" }}>
      <ProfileCard author="Крутыш" tag="@yo"/>

      <section className="page-card" style={{ marginTop: "25px" }}>
        <h2 className="section-subtitle" style={{ marginTop: 0 }}>
          Создать публикацию
        </h2>
        <form className="post-form" onSubmit={addPost}>
          <input
            type="text"
            placeholder="Заголовок"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <textarea
            rows="3"
            placeholder="Текст поста"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <button type="submit">Опубликовать</button>
          <button className="delete-all-button" onClick={() => deleteAllPost()}>
                Удалить все
            </button>
        </form>

        <h2 className="section-subtitle">Мои публикации</h2>
        <div className="feed">
          {posts.length > 0 ? (
          posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              title={post.title}
              text={post.text}
              onDelete={deletePost}
            />
          ))
        ) : (
          <p>Опубликуйте свой первый пост</p>
        )}
        </div>
      </section>
    </div>
  );
}

export default Profile;