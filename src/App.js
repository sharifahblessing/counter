import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import NavBar from "./components/navbar";

import ArticleAdd from './components/articles/articleAdd';
import ArticleList from './components/articles/articleList';
import ArticleDetail from './components/articles/articleDetail';
import ArticleEdit from './components/articles/articleEdit';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <NavBar/>
        <Switch>
        <Route exact path="/" component={ArticleList} />
        <Route exact path="/articles" component={ArticleList} />
        <Route exact path="/articles/new" component={ArticleAdd} />
        <Route exact path="/articles/:id" component={ArticleDetail} />
        <Route exact path="/articles/:id/edit" component={ArticleEdit} />
      </Switch>
      </BrowserRouter>

    );
  }
}





export default App;