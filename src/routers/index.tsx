import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import { AdminRoom } from '../pages/AdminRoom';
import { Home } from '../pages/Home';
//import { NewRoom } from '../pages/NewRoom';
//import { NotFound } from '../pages/NotFound';
//import { Room } from '../pages/Room';
import { Rooms } from '../pages/Rooms';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={Rooms} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
