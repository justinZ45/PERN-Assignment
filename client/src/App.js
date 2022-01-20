import React, {Fragment} from 'react';
import './App.css';
import InputGroceryItem from "./components/InputGroceryItem";
import ListGroceryItem from './components/ListGroceryItem';
import GroceryLogin from './components/GroceryLogin';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


//<InputGroceryItem/>
     // <ListGroceryItem/>


    

function App() {
  return (
    <Router>
     <div>
     <Routes>
     <Route exact path="/list" element = {[<InputGroceryItem/>,<ListGroceryItem/>]} />
       <Route exact path="/" element={<GroceryLogin/>}/>
       </Routes>
     </div>
   </Router>
  )};

export default App;