import Post from "../components/Post";

function Home() {
  const posts = [
    {
      id: 1,
      text: "В Барнауле школьник принес учебник. Все были в шоке от...",
      title: "Секрет быстрого набора массы",
      author: "Eminem",
    },
    {
      id: 2,
      text: "Я хотел сказать всем вам, что динозавры вернутся в Малый Таганрог",
      title: "Мое лето",
      author: "Jay-Z",
    },
    {
      id: 3,
      text: "Скиньте 5 рублей пжпж",
      title: "Срочная хелпа нужна",
      author: "Вась",
    },
    {
      id: 4,
      text: "lorem upsum",
      title: "Hello",
      author: "Oppo",
    },
    {
      id: 5,
      text: "lorem upsum",
      title: "Hello",
      author: "Oppo",
    },
    {
      id: 6,
      text: "lorem upsum",
      title: "Hello",
      author: "Oppo",
    },
    {
      id: 7,
      text: "lorem upsum",
      title: "Hello",
      author: "Oppo",
    },
  ];

  return (
    <section className="page-card">
      <h1 className="page-title">Главная</h1>
      <h2 className="section-subtitle">Лента</h2>
      <div className="feed">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            author={post.author}
            title={post.title}
            text={post.text}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;