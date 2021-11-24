// import {Counter} from "./features/counter/Counter"
import {Welcome} from "./pages/home/Welcome";
import {Index as About} from "./pages/about"
import {Index as Mint} from "./pages/mint/Mint"
import {Index as Collections} from "./pages/collections"

export const Routes = () => {

}

Routes.container = [
    {title: "Home", path: "/home", Component: Welcome, hidden: true},
    {title: "", path: "/", Component: Welcome, hidden: true},
    {title: "Mint", path: "/mint", Component: Mint},
    {title: "About", path: "/about", Component: About},
    {title: "Collections", path: "/collections", Component: Collections},
];