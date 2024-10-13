interface props{
    name: string
}


const ShowUserName = ({name}: props) => {
  return (
    <div>
        
        <h1>Utilizando Props</h1>
        <h2>O nome do usuario é : {name}</h2>
    </div>
  )
}

export default ShowUserName