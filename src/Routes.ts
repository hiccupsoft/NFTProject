// import {Counter} from "./features/counter/Counter"
import {Welcome} from "./pages/home/Welcome";
import {Index as About} from "./pages/about"
import {Index as Mint} from "./pages/mint/Mint"

export const Routes = () => {

}

Routes.container = [
    {title: "FirstPage", path: "/", Component: Welcome},
    {title: "Home", path: "/home", Component: Welcome},
    {title: "About", path: "/about", Component: About},
    {title: "Mint", path: "/mint", Component: Mint},
];