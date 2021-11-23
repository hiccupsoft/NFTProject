import {Counter} from "./features/counter/Counter"
import {Welcome} from "./pages/home/Welcome"

export const Routes = () => {

}

Routes.container = [
    {title: "FirstPage", path: "/", Component: Welcome, bg: ''},
    {title: "Home", path: "/home", Component: Counter, bg: ''},
];