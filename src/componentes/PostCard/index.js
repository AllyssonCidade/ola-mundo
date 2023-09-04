import { Link } from 'react-router-dom'
import styles from './Post.module.css'
import BotaoPrincipal from 'componentes/BotaoPrincipal'
import { AiFillCloseCircle } from "react-icons/ai";


export default function PostCard({ post, textoBotao, aoDeletar }) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <AiFillCloseCircle className={styles.deletar} onClick={aoDeletar}/>
                <img
                    className={styles.capa}
                    src={`/posts/${post.id}/capa.png`}
                    alt='imagem de capa do post'
                />
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <BotaoPrincipal>{textoBotao}</BotaoPrincipal>
            </div>
        </Link>
    )
}