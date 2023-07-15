
import React from 'react';
import ReactDOM from 'react-dom';
console.log("React", React)
function Page() {
  return (
    <div>
      <h1>Why I love react</h1>
      <ol>
        <li>React is composable</li>
        <li>React is declarative</li>
        <li>Lesser learning curve and easy setup, manageable.</li>
        <li>It is actively maiantained by skilled people</li>
      </ol>
    </div>
  )
}

console.log("Page", Page())
// ReactDOM.render(<Page />, document.getElementById("rooot"));