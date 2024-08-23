import Main from "./pages/Main";
import Projects from "./pages/Projects";
import Biography from "./pages/Biography";
import ProjectOne from "./components/ProjectOne";

export const routesPath=[
    {
        path:"/",
        component:Main,
    },
    {
        path:"/projects",
        component:Projects,
    },
    {
        path:"/projects/:id",
        component:ProjectOne,
    },
    {
        path:"/biography",
        component:Biography,
    },
]