import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Header />

      <main>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
