import {createContext, useContext, useEffect, useState} from "react";

const PostsContext = createContext();

export function PostsProvider({children}) {
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
useEffect(() => {
    localStorage.setItem(
      "posts",
      JSON.stringify(posts)
    );
  }, [posts]);
   return (
        <PostsContext.Provider value={{posts, setPosts}}>
            {children}
        </PostsContext.Provider>
    );
}

export function usePosts() {
    return useContext(PostsContext);
}