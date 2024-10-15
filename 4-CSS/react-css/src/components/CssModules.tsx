import styles from './CssModules.module.css'

const CssModules = () => {
  return (
    <div>
        <h1 className={styles.my_title}>Css modules, não altera o css de outros lugares, apenas do componente</h1>
        <p className={styles.my_paragraph}>Basta criar o arquivo com a extensão, 'module.css'</p>
    </div>
  )
}

export default CssModules