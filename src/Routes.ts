// import {Counter} from "./features/counter/Counter"
import {Welcome} from "./pages/home/Welcome";
import {Index as About} from "./pages/about"

export const Routes = () => {

}

Routes.container = [
    {title: "FirstPage", path: "/", Component: Welcome, bg: ''},
    {title: "Home", path: "/home", Component: Welcome, bg: ''},
    {title: "About", path: "/about", Component: About, bg: ''},
];