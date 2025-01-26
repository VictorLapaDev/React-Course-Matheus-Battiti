import style from './Dashboard.module.css'

//hooks
import { useAuthValue } from "../../context/AuthContext"
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { Link } from 'react-router-dom';

const Dashboard = () => {

  const { user } = useAuthValue();
  const uid = user.uid;

  //posts do usuario
  const {documents: posts, loading} = useFetchDocuments("posts", null, uid);


  return (
    <div>
        <h2>Dashboard</h2>
        <p>Gerencie seus posts</p>



        {posts && posts.length === 0 ? (
            <div className={style.nopost}>
              <p>Não foram encontrados posts</p>
              <Link to="/posts/create" className='btn'>
                  Crie seu primeio post
              </Link>
            </div>
        ) : (
          <div>
            <p>Tem posts!!!</p>
          </div>
        )}

        {loading && <p>Carregando posts...</p>}

        {posts && posts.map((post) => (
              <p key={post}>{post.title} </p>
            ))}
    </div>
  )
}

export default Dashboard