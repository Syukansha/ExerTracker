import React from 'react';
import { BrowserRouter as Router ,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// intergrate store.js into app
// import { Provider} from 'react-redux';
// import store from './store';

import Navbar from "./component/navbar.component";
import ExerciseList from "./component/exercise-list.component";
import EditExercise from "./component/edit-exercise.component";
import ExerciseCreate from "./component/create-excercise.component";
import UserCreate from "./component/create-user.component";
import Login from './component/login';
import Home from './component/home';

function App() {

  return (
    // <Provider store={store}>
   <Router>
     <Navbar />
     <br/>
     <Route path="/" exact component={ExerciseList}></Route>
     <Route path="/edit/:id" exact component={EditExercise}></Route>
     <Route path="/create" exact component={ExerciseCreate}></Route>
     <Route path="/user" exact component={UserCreate}></Route>
     <Route path='/login' exact component={Login}></Route>
     <Route path='/home' exact component={Home}></Route>

   </Router>
  //  </Provider>
  )
}

export default App;
