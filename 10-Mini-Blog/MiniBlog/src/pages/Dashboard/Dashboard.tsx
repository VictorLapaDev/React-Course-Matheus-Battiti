import style from './Dashboard.module.css'

//hooks
import { useAuthValue } from "../../context/AuthContext"
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { Link } from 'react-router-dom';

const Dashboard = () => {

  const { user } = useAuthValue();
  const uid = user.uid;

  //posts do usuario
  const posts = []



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
            
          </div>
        )}

    </div>
  )
}

export default Dashboard