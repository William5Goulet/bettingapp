import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home"
import { Hockey } from "./pages/Hockey"
import { Basketball } from "./pages/Basket"
import { Football } from "./pages/Football"
import { Special } from "./pages/Special"


const Routes = () => {

  return (
    <Fragment>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/hockey" component={Hockey} />
        <Route path="/basketball" component={Basketball} />
        <Route path="/football" component={Football} />
        <Route path="/special" component={Special} />
      </BrowserRouter>
    </Fragment>
  );
};

export default Routes;
