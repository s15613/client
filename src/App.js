import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import routes from "./routes";
import "./App.css";
import { Provider } from 'react-redux'
import  store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Router>
        <Header />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.page}
            />
          ))}
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
