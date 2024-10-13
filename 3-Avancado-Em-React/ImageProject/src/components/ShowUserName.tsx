interface props{
    name: string
}


const ShowUserName = ({name}: props) => {
  return (
    <div>
        
        <h2>O nome do usuario é : {name}</h2>
    </div>
  )
}

export default ShowUserName