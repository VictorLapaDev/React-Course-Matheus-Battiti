import { useState } from "react";

const ListRender = () => {

    const [list] = useState(["Matheus", "Jojo", "Lucas", "Jõao" ]);


  return (
    <div>
        <ul>
            {list.map((item) => {
                return(
                    <li>{item}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default ListRender