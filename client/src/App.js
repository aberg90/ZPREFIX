// import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <h1>Inventory</h1>
//       {/* <Board/> */}
//       {/* <GameBoard size={8} /> */}
//     </div>
//   );
// }

// export default App;
import { useEffect, useState } from "react";
const baseUrl = `http://localhost:8080/users`;

function App() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return <div className="App">
    {JSON.stringify(users)}
  </div>
}

export default App;