import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Section from './components/Section';
import { DataProvider } from './components/Context';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router> 
          <Header/>
          <Section/>
        </Router>
        {/*Add your code here*/}
      </div>  
    </DataProvider>
    
  );
}

export default App;
