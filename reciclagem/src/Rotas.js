import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login  from "./telas/Login";
import Inicio from "./telas/Inicio"
import Usuario  from "./telas/Usuario";
import Pontos  from "./telas/Pontos";
import PremiosUsuario  from "./telas/ListaPremiosUsuario";
import Premio from "./telas/Premio";
import ListaPremios from "./telas/ListaPremios";
import PremioUsuario from "./telas/PremioUsuario";

export const Rotas = () => {
    const rotas = createBrowserRouter([
        {path: "/",element: <Login />},
        {path: "/inicio",element: <Inicio />},
        {path: "/usuario",element: <Usuario />},
        {path: "/usuario/pontos",element: <Pontos />},
        {path: "/premio/usuario",element: <PremioUsuario />},
        {path: "/usuario/premios",element: <PremiosUsuario />},
        {path: "/premio",element: <Premio />},
        {path: "/premio/lista",element: <ListaPremios />},
    ]);
    return <RouterProvider router={rotas}/>
}