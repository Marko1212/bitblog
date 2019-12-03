import React from 'react';
import './App.css';
import Header from './partials/Header'
import Footer from './partials/Footer'
import Home from '../app/pages/Home'
import { Switch, Route, Redirect } from "react-router-dom";
import PostSnippet from './components/post/PostSnippet';
import PostPage from './components/post/PostPage';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/post/:postId" component={PostPage} />
        <Route path='/' component={Home} />
      </Switch>
      <Footer />
    </>
  )

}

export default App;
