import style from "./CreatePost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";


const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  

  return (
    <div className={style.createPost}>
      <h2>Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Titulo:</span>
          <input
            type="text"
            name="tittle"
            required
            placeholder="Insira o titulo do post"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <span>Url da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem que represente o post"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <label>
          <span>Conteudo:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteudo do post"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </label>
        <label>
          <span>Tags</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por virgula"
            value={tags}
            // onChange={(e) => setTags(e.target.value)}
          />
        </label>

        <button className="btn" type="submit">
           Cadastrar
          </button>

        {/* {!loading && (
           <button className="btn" type="submit">
           Cadastrar
          </button>
        ) }

        {loading && (
          <button className="btn" type="submit" disabled>
            Aguarde...
          </button>
        )} */}
       
        {/* {error && <p className="error">{error}</p>} */}
      </form>
    </div>
  );
};

export default CreatePost;
