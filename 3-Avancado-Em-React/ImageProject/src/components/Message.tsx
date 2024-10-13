interface prop{
    message: string
}

const Message = ({message}: prop) => {
  return (
    <div>
        <h1>State Lift</h1>
        <p>A mensagem é: {message}</p>
    </div>
  )
}

export default Message