import { useState } from "react";

const ListRender = () => {

    const [list] = useState(["Matheus", "Jojo", "Lucas", "Jõao" ]);

    const [users, setUsers] = useState([
        {id: 1, Name:"Lapa", age:19},
        {id: 2, Name:"Jõao", age:17},
        {id: 3, Name:"Pablo", age:20},
        {id: 4, Name:"Pedro", age:21},
    ])


    function deleteRandom(){
        const randomNumber = Math.floor(Math.random() * 5);

        setUsers((prevUsers) => { /*prevUsers é a lista antes de ser modificada, dessa forma ele retorna no final do código a lista com um filter para só tirar um id aleatorio */
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id)
        })

    };

  return (
    <div>
        <h1>Renderizando listas</h1>
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
        <button onClick={deleteRandom}>deletar</button>
    </div>
  )
}

export default ListRender