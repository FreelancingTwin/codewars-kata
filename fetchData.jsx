import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const URI = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  
  useEffect(()=>{
    async function fetchData(url){
      const resp = await fetch(url)
      const data = await resp.json()
      console.log("DATA",data)
      setUsers(data);
      return data;
    }
    // console.log("USERS", users);
    // const resultArray = fetchData(URI)
    // setUsers(resultArray)
  }, [])
  
  console.log("USERS", users);
  return <>
  <h1>Interview Project</h1>
  <ul>
    {users && users.length !== 0 && users.map(data => (
      <li key={data.id}>
        <h1>{data.id} {data.email}</h1>
      </li>
    ))}
    </ul>
  </>;
}

export default App;
