import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  return (
    <div className="App">
        <div>
          <SearchBar />
          <SearchButton onClick={() => getJSON()} setState={() => setData()}/>
        </div>
    </div>
  );
}

function SearchBar(props){
  return (
    <input type="text"/>
  );
}

function SearchButton(props){
  useEffect((props) => {
    console.log("Loaded");
    props.setState();
  }, []);

  return (
    <button onClick={props.onClick} >Search</button>
  );
}


async function getJSON(){
  return fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export default App;
