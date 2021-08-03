import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Provider, { MyContext } from "./Provider/index";
import "./App.css";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Provider>
          <BrowserRouter>
            <Switch>
              <Route
                exact
                path={"/"}
                render={() => (
                  <MyContext.Consumer>
                    {(context) => <Home {...context} />}
                  </MyContext.Consumer>
                )}
              />
              <Route
                exact
                path={"/search"}
                render={() => (
                  <MyContext.Consumer>
                    {(context) => <Search {...context} />}
                  </MyContext.Consumer>
                )}
              />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default BooksApp;
