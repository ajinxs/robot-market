import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <h1>Robot Market</h1>

      <Router>
        <Header/>
        <Section/>
      </Router>

      {/*Add your code here*/}
    </div>
  );
}

export default App;
