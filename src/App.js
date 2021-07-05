import React from 'react';
import {Navbar} from './components/Navbar/Navbar';
import {Home} from './pages/Home';
import {Profile} from './pages/Profile';
import {About} from './pages/About';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Alert} from './components/Alert/Alert';
import {AlertState} from './Context/Alert/AlertState';
import {GithubState} from './Context/github/GithubState';


function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={{text: 'Test alert'}} />
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/profile/:name' component={Profile}/> 
            </Switch>     
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
