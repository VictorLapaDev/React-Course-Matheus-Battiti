import styles from "./Dashboard.module.css";

//hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  //posts do usuario
  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  const deleteDocument = (id) => {

  }

  if(loading){
    return <p>Carregando...</p>
  }

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie seus posts</p>

      {posts && posts.length === 0 ? (
        <div className={styles.nopost}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Crie seu primeio post
          </Link>
        </div>
      ) : (
        <div className={styles.showPost}>

          <div className={styles.post_header}>
            <span>Titulo</span>
            <span>Ações</span>
          </div>

          {posts &&
            posts.map((post) => (
              <div key={post.id} className={styles.post_row}>

                <p>{post.title}</p>

                <div>
                  <Link to={`/posts/${post.id}`} className="btn btn-outline">
                    Ver post
                  </Link>
                  <Link to={`posts/edit/${post.id}`} className="btn btn-outline">
                    Editar
                  </Link>
                  <button onClick={() => deleteDocument(post.id)} className="btn btn-outline btn-danger">
                    Excluir
                  </button>
                </div>

              </div>
            ))}

            
        </div>
      )}

    </div>
  );
};

export default Dashboard;
