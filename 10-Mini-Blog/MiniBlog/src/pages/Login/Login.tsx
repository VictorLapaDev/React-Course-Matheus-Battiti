import { Eye, EyeOff } from 'lucide-react'
import styles from './Login.module.css'
import { useEffect, useState } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';

const Login = () => {

  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  
  
  const [visible, setVisible] = useState(false);


  const {createUser, error: authError, loading} = useAuthentication(); //nao vai precisar
  
    const habdleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      setError("");
  
      const user = {
        email,
        password
      };
  
  
      // const res = await createUser(email, password, );
  
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
    <div className={styles.login}>
      <h1>Entar</h1>
      <p>Faça login para utilizar o sistema</p>
      <form onSubmit={habdleSubmit}>
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

        {!loading && (
           <button className="btn" type="submit">
           Entrar
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
  )
}

export default Login