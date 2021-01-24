import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import AddUser from './components/AddUser'
import NotFound from './components/NotFound'
import EditUser from './components/EditUser'
import User from './components/User'
import Post from './components/Post'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (

    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Switch>
     <Route exact path='/' component={Home}/>
     <Route exact path='/Contact' component={Contact}/>
     <Route exact path='/About' component={About}/>
     <Route exact path='/users/add' component={AddUser}/>
     <Route exact path='/users/edit/:id' component={EditUser}/>
     <Route exact path='/posts/:id' component={User}/>
     <Route exact path='/post' component={Post}/>
     <Route component={NotFound}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
