import React from 'react';
import './App.scss';

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import {Home} from './pages/Home/Home'
import {Serves} from './pages/Serves/Serves'
import {Question} from './pages/Question/Question'
import {Contacts} from './pages/Contacts/Contacts'



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/serves" component={Serves} />
        <Route path="/question" component={Question} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
      <Footer />
    </BrowserRouter>

    );
}

export default App;
