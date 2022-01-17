import React, {Fragment} from 'react';
import './App.css';

//components

import InputGroceryItem from "./components/InputGroceryItem";
import ListGroceryItem from './components/ListGroceryItem';

function App() {
  return (
    <Fragment>
      <div className="container">
      <InputGroceryItem/>
      <ListGroceryItem/>
      </div>
  </Fragment>
  )};

export default App;
