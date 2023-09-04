import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./Post.css"
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";
import styles from './Post.module.css'


export default function Post() {


    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })
    if (!post) {
        return <NaoEncontrada />
    }

    const PostsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a,b) => b.id - a.id)
        .slice(0,4)

    return (
        <PaginaPadrao>
            <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>    
                </div>
            <h2 className={styles.tituloOutrosPosts}>
                Outros posts que você pode gostar:
            </h2>
            <ul className={styles.postsRecomendados}>
                {PostsRecomendados.map((post) =>(
                    <li key={post.id}>
                        <PostCard post={post} textoBotao={"Ler"}/>
                    </li>
                ))}

            </ul>
            </PostModelo>
        </PaginaPadrao>

    )
}