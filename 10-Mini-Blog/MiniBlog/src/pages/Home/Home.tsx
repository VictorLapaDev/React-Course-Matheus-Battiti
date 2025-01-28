//css
import style from "./Home.module.css";

//hooks
import { Link, useNavigate,} from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

//components
import PostDetails from "../../components/PostDetails/PostDetails";

const Home = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const { documents: posts, loading } = useFetchDocuments("posts"); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if(search){
      return navigate(`/search?q=${search}`);
    }

  };

  return (
    <div className={style.home}>
      <h1>Veja nossos posts mais recentes</h1>

      <form className={style.search_form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ou busque por tags"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-dark" type="submit">
          Pesquisar
        </button>
      </form>

      <div>
        {loading && <p>Carregando...</p>}

        {posts && posts.map((post) => (
          <PostDetails key={post.id} post={post} />
        ))}

        {posts && posts.length === 0 && (
          <div className={style.noPosts}>
            <p>Não foram encontrados posts</p>
            <Link className='btn' to="/posts/create">Crie o primeiro post</Link>
          </div>
        )}

      </div>
    </div>
  );
};

export default Home;
