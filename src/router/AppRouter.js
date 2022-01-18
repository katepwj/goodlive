import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";


import Home from '../pages/home/Home';
import Life from '../pages/life/Life';
import NotFound from '../pages/notFound/NotFound';
import Shop from '../pages/shop/Shop'
import Mine from '../pages/mine/Mine'
import City from '../pages/city/City';
import Search from '../pages/search/Search';
import Detail from '../pages/detail/Detail';
import Purchase from '../pages/purchase/Purchase';
import MyFavorites from '../pages/myFavorites/MyFavorites';
import BottomNav from '../components/bottomNav/BottomNav';

function AppRouter() {
  return (
    <div >
      <BrowserRouter>
        <Switch>
          <Route path="/city" component={City} />
          <Route path="/search/:keywords" component={Search} />
          <Route path="/detail/:id?" component={Detail} />
          <Route path="/purchase/:id?" component={Purchase} />
          <Route path="/myfavorites" component={MyFavorites} />
          <Route path="/mine" component={Mine} />

          <BottomNav>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/life" component={Life} />
              <Route path="/shop" component={Shop} />
            </Switch>
          </BottomNav>
          <Route component={NotFound} />
        </Switch>

      </BrowserRouter>
    </div>
  )
}

export default AppRouter
