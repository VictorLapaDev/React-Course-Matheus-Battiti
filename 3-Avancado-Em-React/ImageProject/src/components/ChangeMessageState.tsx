interface prop{
    MyFunction: (message: string) => void;
}
const ChangeMessageState: React.FC<prop> = ({MyFunction}) => {
    const messages = ["oi", "ola", "ola, tude bem?"];

  return (
    <div>
        <button onClick={() => MyFunction(messages[0])}>1</button>
        <button onClick={() => MyFunction(messages[1])}>2</button>
        <button onClick={() => MyFunction(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessageState