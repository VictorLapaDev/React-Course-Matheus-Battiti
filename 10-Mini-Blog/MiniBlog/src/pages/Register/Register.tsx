import { useEffect, useState } from "react";
import styles from "./Register.module.css";
import { Eye, EyeOff } from "lucide-react";
import { useAuthentication } from "../../hooks/useAuthentication";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [visible, setVisible] = useState(false);

  const {createUser, error: authError, loading} = useAuthentication();

  const habdleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais");
      return;
    }


    const res = await createUser(email, password, displayName);

    console.log(user);
  };


  useEffect(() => {
    if(authError) {
      setError(authError);
    }
  }, [authError])


  const handleVisibilityToggle = () => {
    setVisible(!visible);
  };

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar em nosso blog</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={habdleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="text"
            name="email"
            required
            placeholder="Insira seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <div className={styles.inputArea}>
            <input
              type={visible ? "text" : "password"}
              name="password"
              required
              placeholder="Insira sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleVisibilityToggle} type="button">
              {visible ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <div className={styles.inputArea}>
            <input
              type={visible ? "text" : "password"}
              name="confirmPassword"
              required
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button onClick={handleVisibilityToggle} type="button">
              {visible ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </label>

        {!loading && (
           <button className="btn" type="submit">
           Cadastrar
          </button>
        ) }

        {loading && (
          <button className="btn" type="submit" disabled>
            Aguarde...
          </button>
        )}
       
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
