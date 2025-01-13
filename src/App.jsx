import { useState, useEffect } from "react";
import "./App.css";
import Component from "./Component";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);
  // console.log(users);
  return (
    <div className="bg-gray-100 text-center">
      <h1 className="text-4xl bg-pink-400">Fetech data from dummy json</h1>
      <div className="flex flex-wrap justify-center gap-1">
        {users.map((user) => (
          <Component key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
