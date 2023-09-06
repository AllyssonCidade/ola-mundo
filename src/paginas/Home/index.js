import styles from './Home.module.css';
import posts from "json/posts.json"
import PostCard from 'componentes/PostCard';
import aoDeletar from '../../componentes/DeletarPost';

export default function Home() {
    aoDeletar()
    return (

        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post} textoBotao={"editar"} showDeleteButton={true}/>
                </li>
            ))}

        </ul>
    )
}


