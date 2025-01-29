//css
import { Link } from 'react-router-dom'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o Mini <span>Blog</span></h2>

      <p>Este projeto consiste em um blog feito com react no front end e firebase no back end, com base nas aulas do curso "React do Zero a Maestria (c/ hooks, router, API, Projetos)" do professor Matheus Battisti na udemy </p>

      <p className={styles.acesse}> Acesse :
         <a className={styles.link} href="https://www.udemy.com/course/react-do-zero-a-maestria-c-hooks-router-api-projetos/?couponCode=ST16MT28125" target="_blank">https://www.udemy.com/course/react-do-zero-a-maestria-c-hooks-router-api-projetos/?couponCode=ST16MT28125</a>
      </p>
      
      <Link to="/posts/create" className="btn"> Criar Post</Link>
    </div>
  )
}

export default About