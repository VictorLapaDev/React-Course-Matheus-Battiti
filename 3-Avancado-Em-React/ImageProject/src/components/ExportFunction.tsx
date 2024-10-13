interface prop{
    myFunction: () => void;
}


const ExportFunction: React.FC<prop> = ({myFunction}) => {
  return (
    <div>
        <h1>Utilizando function do componente pai:</h1>
        <button onClick={myFunction}>Clique aqui</button>
    </div>
  )
}

export default ExportFunction