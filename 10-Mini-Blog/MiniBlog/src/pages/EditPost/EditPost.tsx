import style from "./EditPost.module.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";

const EditPost = () => {
  const { id } = useParams();

  const { document: post } = useFetchDocument("posts", id);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState(""); // Manter tags como string
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setImage(post.image);
      setBody(post.body);

      const textTags = post.tags.join(", ");
      setTags(textTags);
    }
  }, [post]);

  const user = useAuthValue(); // Chamada correta do hook

  const navigate = useNavigate();

  const { updateDocument, response } = useUpdateDocument("posts");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    // Validação da URL da imagem
    const imageRegex = /^https:\/\//i;
    if (!imageRegex.test(image)) {
      setFormError("A URL da imagem não é válida.");
      return;
    }

    // Converter tags em array
    const tagsArray = tags
      .split(",")
      .map((tag) => tag.trim().toLocaleLowerCase());

    //verificando todos os campos
    if (!title || !image || !body || !tags) {
      setFormError("Preencha todos os campos.");
      return;
    }

    // Verificar se nao há erro no formulário
    if (formError) return;

    //cria um objeto atualizadpo para depois jogar para o hook
    const data = {
        title,
        image,
        body,
        tags: tagsArray,
        uid: user.user.uid,
        createdBy: user.user.displayName, 
      }

    // Inserir documento atualizado
    updateDocument(id, data);

    // Redirecionar após inserção bem-sucedida
    if (!response.loading && !response.error) {
      navigate("/dashboard"); 
    }
  };

  return (
    <div className={style.editPost}>
      {post && (
        <>
          <h2>Editando post: {post.title}</h2>
          <p>Altere os dados do post como desejar!</p>
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
            <p className={style.preview_title}>Preview da imagem atual:</p>
            <img className={style.preview_image} src={post.image} alt={post.title} />
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
                Editar
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
        </>
      )}


    </div>
  );
};

export default EditPost;
