import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
