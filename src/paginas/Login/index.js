import { Link } from "react-router-dom"
import styles from "./Login.module.css"

export default function Login() {
    return (
        <main className={styles.login}>
            <h2 className={styles.login__titulo}>Login</h2>
            <form className={styles.login__form}>
                <label>Email</label>
                <input className={styles.login__input} type="email" placeholder="Digite seu email" />
                <label>Senha</label>
                <input className={styles.login__input} placeholder="Digite sua senha" />
                <Link className={styles.botao__login} to={"/home"} >Entrar</Link>
            </form>
        </main>
    )
}