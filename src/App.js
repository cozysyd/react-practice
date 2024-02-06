
import React from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',

  },
];

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      <ul>
        {list.map(function(item) {
          return <li key={item.url}>
        })}
      </ul>
    </div>
      
  );
}


export default App;
