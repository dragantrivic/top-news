import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import TopNews from './containers/TopNews/TopNews';
import AllCategories from './components/AllCategories/AllCategories';
import Search from './containers/Search/Search';
import FullArticle from './containers/FullArticle/FullArticle';

const App = () => {
  return (
    <Router>
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={TopNews} />
            <Route path="/categories" component={AllCategories} />
            <Route path="/search" component={Search} />
            <Route exact path="/top-news/:id" component={FullArticle} />
            <Route exact path="/:category/:id" component={FullArticle} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
