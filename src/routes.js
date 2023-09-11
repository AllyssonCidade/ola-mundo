import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from './paginas/Inicio';
import Sobremim from './paginas/SobreMin'
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Post from "./paginas/Post";
import NaoEncontrada from "./paginas/NaoEncontrada";
import ScrollToTop from "./componentes/ScrollToTop";
import Login from "./paginas/Login";
import AdicionarPost from "./paginas/Home";
import Home from "./paginas/Home";


function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<Sobremim />} />
          <Route path="adicionarpost" element={<AdicionarPost/>} />
          <Route path="home" element={<Home/>} />

        </Route>

        <Route path="login" element={<Login/>} />
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />

      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}
export default AppRoutes;
