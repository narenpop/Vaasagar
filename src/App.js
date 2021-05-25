/** @format */

import React from "react";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/loginScreen/login";
import Registration from "./views/registrationScreen.js/registration";
import HomePage from "./views/homePage";
import ProductPage from "./views/product/productPage";
import Category from "./views/category/category";
import PopularBookSets from "./views/popularBookSets/popularBookSets";
import FeaturedAuthor from "./views/featuredAuthor/featuredAuthor";
import AuthorPage from "./views/authorPage/AuthorPage";
const createBrowserHistory = require("history").createBrowserHistory;
export const history = createBrowserHistory({
  basename: "/review/vaasagar",
});

class App extends React.Component {
  render() {
    return (
      <div>
        <Router basename='/'>
          <Switch>
            <Route
              path={`${process.env.PUBLIC_URL}/`}
              component={HomePage}
              exact
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/login`}
              render={(props) => <Login {...props} />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/registration`}
              component={Registration}
              exact
            />

            <Route
              path={`${process.env.PUBLIC_URL}/product`}
              component={ProductPage}
              exact
            />
            <Route
              path={`${process.env.PUBLIC_URL}/category`}
              component={Category}
              exact
            />
            <Route
              path={`${process.env.PUBLIC_URL}/popular-books`}
              component={PopularBookSets}
              exact
            />
            <Route
              path={`${process.env.PUBLIC_URL}/featured-author`}
              component={FeaturedAuthor}
              exact
            />
            <Route
              path={`${process.env.PUBLIC_URL}/author-details`}
              component={AuthorPage}
              exact
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
