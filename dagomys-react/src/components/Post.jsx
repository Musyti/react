import Actions from "./Actions"

function Post(props) {
    return (
        <article className="post">
            <h2>{props.title}</h2>
            <p className = "post-text">{props.text}</p>
            <p className="post-author">{props.author}</p>
            <Actions />
            {props.onDelete && (
                <button className="delete-button" onClick={() => props.onDelete(props.id)}>
                Удалить
            </button>
            )}
            
        </article>

        
    )
}

export default Post