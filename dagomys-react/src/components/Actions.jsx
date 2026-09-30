import { useState } from "react"

function Actions() {

    const [likes, setLikes] = useState(0);
    const [repost, setReposts] = useState(0);

    return (
        <div className="actions">
            <button onClick={() => setLikes(likes+1)}>
                🤡{likes}
            </button>
            <button onClick={() => setReposts(repost+1)}>
                🔁{repost}
            </button>
            <button onClick={() => {
                setLikes(0);
                setReposts(0);
            }}>
                Сбросить
            </button>
        </div>
    )
}

export default Actions