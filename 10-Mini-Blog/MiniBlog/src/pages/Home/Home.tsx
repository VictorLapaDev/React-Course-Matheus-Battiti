//css
import style from "./Home.module.css";

//hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

//components

const Home = () => {
  const [search, setSearch] = useState("");

  const [posts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <h1>Posts</h1>
        {posts && posts.length === 0 && (
          <div className={style.noPosts}>
            <p>Não foram encontrados posts</p>
            <Link className='btn' to="/create-post">Crie o primeiro post</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
