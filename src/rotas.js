import React from "react";
import { HashRouter,Switch,Route } from "react-router-dom";

import Home from "./views/Home";
import CadastroProdutos from "./views/produtos/Cadastro";

export default () => {
    return(
        <>
            <HashRouter>
                <Switch>
                    <Route exact path="/cadastro-produtos" component={CadastroProdutos}/>
                    <Route exact path="/" component={Home}/>

                </Switch>
            </HashRouter>
        </>
    );
}