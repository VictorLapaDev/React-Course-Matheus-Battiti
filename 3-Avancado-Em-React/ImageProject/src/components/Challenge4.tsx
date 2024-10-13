interface person{
    id:  number,
    name: string,
    age: number,
    profission: string
}
const Challenge4 = ({name, age, profission, id}: person) => {
  return (
    <div>
        <h2>Person {id}</h2>
        <h3>Nome: {name}, Idade:{age}, Profissao: {profission}</h3>
        {age >= 18? (
            <h3>A pessoa pode tirar a carteira de habilitação</h3>
        ) : (
            <h3>A pessoa não pode tirar a carteira de habilitação</h3>
        )}
    </div>
  )
}

export default Challenge4