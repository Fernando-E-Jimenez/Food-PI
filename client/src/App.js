import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';
import RecipeCreate from './components/RecipeCreate';
import RecipeDetail from './components/RecipeDetail';
import NavBar from './components/NavBar';
import React from 'react';
import style from './App.module.css'

function App() {
  return (
    <BrowserRouter >
      <div className={style.App}>
        <Switch>
          <Route exact path='/' component={Landing} />
          <React.Fragment>
            <NavBar/>
            <Route exact path='/home' component={Home} />
            <Route path='/create' component={RecipeCreate} />
            <Route path='/recipe/:id' component={RecipeDetail} />
          </React.Fragment>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
