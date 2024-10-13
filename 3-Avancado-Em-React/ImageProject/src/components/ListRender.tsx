import { useState } from "react";

const ListRender = () => {

    const [list] = useState(["Matheus", "Jojo", "Lucas", "Jõao" ]);

    const [users] = useState([
        {id: 1, Name:"Lapa", age:19},
        {id: 2, Name:"Jõao", age:17},
        {id: 3, Name:"Pablo", age:20},
        {id: 4, Name:"Pedro", age:21},
    ])

  return (
    <div>
        <ul>
            {list.map((item, i) => {
                return(
                    <li key={i}>{item}</li>
                )
            })}
        </ul>

        <ul>
            {users.map((user) => {
                return(
                    <li key={user.id}>
                        Nome: {user.Name}, idade: {user.age}
                    </li>
                )
            })}

        </ul>
    </div>
  )
}

export default ListRender