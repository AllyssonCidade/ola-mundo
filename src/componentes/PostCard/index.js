import styles from './Post.module.css'
import BotaoPrincipal from '../../componentes/BotaoPrincipal'
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from 'react';


export default function PostCard({ post, textoBotao, showDeleteButton}) {
    const [deletarPost, setDeletarPost] = useState(false);
    function aoDeletar() {
        setDeletarPost(true);
    }

    if (deletarPost) {
        return null;
    }
    return (
        <div >
            <div className={styles.post}>
                {showDeleteButton && <AiFillCloseCircle className={styles.deletar} onClick={aoDeletar} />}
                <img
                    className={styles.capa}
                    src={`/posts/${post.id}/capa.png`}
                    alt='imagem de capa do post'
                />
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <BotaoPrincipal to={`/posts/${post.id}`}>{textoBotao}</BotaoPrincipal>
            </div>
        </div>
    )
}


