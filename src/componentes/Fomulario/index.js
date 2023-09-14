import styles from './Formulario.module.css'

export default function Formulario({ children }) {

    return (
        <div className={styles.formulaio__container}>
            <h2 className={styles.formulaio__titulo}>Adicionar Post</h2>
            <form className={styles.formulario}>
                <label>Titulo</label>
                <input className={styles.formulaio__input} type="text" placeholder="Digite o Titulo" />
                <label>Conteudo</label>
                <textarea className={styles.formulaio__input} type='text' placeholder="Digite o conteudo do Post" rows={10} spellCheck='true' autoComplete='true'/>
                <label>Capa</label>
                <input className={styles.formulaio__input} type="text" placeholder="Digite a URL da imagem" />
                <button className={styles.botao__formulaio} to={""} >Adicionar Post</button>
            </form>
        </div>
    )
}