import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/mnha_foto.png'

export default function Banner() {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá,
                </h1>
                <p className={styles.paragrafo}>Boas vindas ao meu espaço pessoal! Eu sou  [Seu nome]. Trabalho com [Tema das Materias].  Aqui compartilho conhecimentos, espero que aprenda algo novo. </p>
                 </div>
                 <div className={styles.imagens}>
                    <img className={styles.circuloColorido}
                     src={circuloColorido} 
                     aria-hidden={true}/>
                     <img className={styles.minhaFoto} 
                     src={minhaFoto} 
                    alt='minha foto de perfil e apresentão' 
                    />
                 </div>
        </div>
    )
}