import styles from './Home.module.css';
import posts from "../../json/posts.json"
import PostCard from '../../componentes/PostCard';
import Formulario from '../../componentes/Fomulario';

export default function Home() {
    return (
        <>
        <Formulario>
            Adicionar Post
        </Formulario>
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post} textoBotao={"editar"} showDeleteButton={true}/>
                </li>
            ))}
        </ul>
            </>
    )
}


