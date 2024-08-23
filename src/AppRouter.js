import React from 'react';
import {routesPath} from "./routes";
import {Route, Routes} from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
        {routesPath.map(({path,component})=>
        <Route key={path} path={path} Component={component}/>)}
        </Routes>
    );
};

export default AppRouter;