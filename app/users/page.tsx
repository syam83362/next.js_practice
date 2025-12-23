import React from 'react'
import Products from '../components/products'

interface User{
  id:number;
  name:string;
}



const user = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users:User[] = await res.json();

  return (
    <div>
      user syam hello
      {/* <Products/> */}
      <h1>users :</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>

  )
}

export default user