import React, { useState } from "react";
import SearchBox from "./SearchBox";
import UserList from "./UserList";

export default function App() {
  const users = ["Pratima", "Kashish", "Kiran", "Karan", "Pari"];

  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>User Search</h1>

      <SearchBox search={search} setSearch={setSearch} />
      <UserList users={filteredUsers} />
    </div>
  );
}
