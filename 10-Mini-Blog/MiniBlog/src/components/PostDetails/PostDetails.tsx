import { Link } from "react-router-dom";
import styles from "./PostDetails.module.css";

interface props{
    post: object
}

const PostDetails = ({post}: props) => {
  return (
    <div>
        <img src={post.image} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.createdBy}</p>
        <div>
            {post.tags.map((tag: string) => (
               <p key={tag}><span>#</span>{tag}</p>
            ))}
        </div>
        <Link to={`/posts/${post.id}`} className="btn btn-outline">Ler</Link>
        
    </div>
  )
}

export default PostDetails