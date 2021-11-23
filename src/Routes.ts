import {Counter} from "./features/counter/Counter"

export const Routes = () => {

}

Routes.container = [
    {title: "Home", path: "/", Component: Counter, bg: ''},
    {title: "Home", path: "/home", Component: Counter, bg: ''},
];