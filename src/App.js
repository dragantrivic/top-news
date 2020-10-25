import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import TopNews from './containers/TopNews/TopNews';
import AllCategories from './components/AllCategories/AllCategories';
import Search from './containers/Search/Search';
import FullArticle from './components/FullArticle/FullArticle';

const App = () => {
  const [lang, setLang] = useState('');
  const location = useLocation();

  useEffect(() => {
    langChangeHandler();
  }, [location,lang]); // eslint-disable-line react-hooks/exhaustive-deps

  const langChangeHandler = () => {
    const pathname = location.pathname.split('/');
    const activeLang = pathname[1];
    setLang(activeLang);
  }

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
            <Redirect to="/gb" />
        </Route>
        <Route exact path="/:lng/" render={(props) => (
            <TopNews {...props} activeLang={lang} />
          )}
        />
        <Route path="/:lng/categories" render={(props) => (
            <AllCategories {...props} activeLang={lang} />
          )}
        />
        <Route path="/:lng/search" render={(props) => (
            <Search {...props} activeLang={lang} />
          )}
        />
        <Route exact path="/:lng/:category" render={(props) => (
            <TopNews {...props} activeLang={lang} />
          )}
        />
        <Route path="/:lng/news/:id" component={FullArticle} />
        <Route path="/:lng/:category/:id" component={FullArticle} />
      </Switch>
    </Layout>
  );
};

export default App;
