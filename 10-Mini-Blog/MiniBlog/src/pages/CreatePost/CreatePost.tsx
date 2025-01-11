import style from "./CreatePost.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useSetDocuments";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState(""); // Manter tags como string
  const [formError, setFormError] = useState("");

  const user = useAuthValue(); // Chamada correta do hook
  const navigate = useNavigate();
  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    // Validação da URL da imagem
    const imageRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))/i;
    if (!imageRegex.test(image)) {
      setFormError("A URL da imagem não é válida.");
      return;
    }

    // Converter tags em array
    const tagsArray = tags.split(',').map(tag => tag.trim());

    // Verificar se todos os campos estão preenchidos
    if (!title || !image || !body || tagsArray.length === 0) {
      setFormError("Por favor, preencha todos os campos.");
      return;
    }

    // Inserir documento
    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.user.uid,
      createdBy: user.user.displayName, // Corrigido
    });
    

    // Redirecionar após inserção bem-sucedida
    if (!response.loading && !response.error) {
      navigate("/"); // Redirecionar para a página inicial
    }
  };

  return (
    <div className={style.createPost}>
      <h2>Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Insira o título do post"
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
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            value={tags}
            onChange={(e) => setTags(e.target.value)} // Atualizado para lidar com o input
          />
        </label>

        {!response.loading && (
          <button className="btn" type="submit">
            Cadastrar
          </button>
        )}

        {response.loading && (
          <button className="btn" type="submit" disabled>
            Aguarde...
          </button>
        )}

        {formError && <p className="error">{formError}</p>}
        {response.error && <p className="error">{response.error}</p>}
      </form>
    </div>
  );
};

export default CreatePost;
