import './App.css';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import ShowDetail from './components/ShowDetail/ShowDetail';
import React, { useState } from 'react';

function App() {
  const [data, updatedata] = useState();
  const [isloading, loadState] = useState(true);

  function saveHandler(Height, Weight) {
    loadState(true);
    updatedata(Weight / (Height * Height))

    loadState(false);
  }

  return (
    <div className="App">
      <div className="head"><Header></Header></div>
      <div className="form"><Form onSave={saveHandler}></Form></div>
      <div className='details'>
        {!isloading && <ShowDetail bmis={data}></ShowDetail>}
      </div>
      <div className="foot"><Footer></Footer></div>
    </div>
  );
}

export default App;
