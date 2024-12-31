import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar em nosso blog</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form action="">
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="text"
            name="email"
            required
            placeholder="Insira seu email"
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
          />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme sua senha"
          />
        </label>
        <button className="btn" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Register;
