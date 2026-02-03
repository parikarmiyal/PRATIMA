import { useState } from "react";
function SearchList(){
  const users=[
    {id:1 ,name:"pari"},
    {id:2 ,name:"kashish"},
    {id:3 ,name:"kiran"},
    {id:4 ,name:"karan"}
  ]
  const [searchText, setSearchText] = useState("");
  const filteredUsers=users.filter((user)=>user.name.toLowerCase().includes(searchText.toLowerCase()))
  return (
    <div>
      <h1>USER LIST</h1>
      <input type="text" placeholder="ENTER THE NAME" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
      {searchText!=="" &&
      <ul>
        {filteredUsers.map((user)=>(
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>}
    </div>
  )
}
export default SearchList;