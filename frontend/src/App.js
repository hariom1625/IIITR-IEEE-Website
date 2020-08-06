import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import EventList from './components/Events/EventList';
import Gallery from './components/Gallery/Gallery';
import Members from './components/Members/Members';
import Resources from './components/Resources/Resources';
import Admin from './components/Admin/Admin';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" component={EventList} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/members" component={Members} />
          <Route path="/resources" component={Resources} />
          <Route path="/admin" component={Admin} />
        </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
