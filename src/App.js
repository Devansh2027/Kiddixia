import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import KidUI from './kid_ui'; // Import your child component

function App() {
  return (
    <Router>
      <Switch>
       
        <Route path="/child" component={KidUI} />
      </Switch>
    </Router>
  );
}

export default App;
