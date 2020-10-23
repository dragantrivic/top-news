import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import TopNews from './containers/TopNews/TopNews';
import Categories from './containers/Categories/Categories';
import Search from './containers/Search/Search';

const App = () => {
  return (
    <Router>
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={TopNews} />
            <Route path="/categories" component={Categories} />
            <Route path="/search" component={Search} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
