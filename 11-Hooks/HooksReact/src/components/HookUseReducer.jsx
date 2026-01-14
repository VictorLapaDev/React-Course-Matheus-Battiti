import { useReducer, useState } from 'react'

const HookUseReducer = () => {

    // 1 - começando com useReducer
    // useReducer é um Hook usado quando o estado tem várias regras ou ações.
    // Ele ajuda a organizar melhor o código.
    // Já o useState é mais simples e usado para estados básicos.

    //esse dispatch é como se fose o setNumber que executa a função dentro do reducer
    //o state é o valor de number dentro do reducer
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    })

    // 2 - useReducer com actions
    const initialTasks = [
        {id: 1, texto: "qualquer coisa 1"},
        {id: 2, texto: "feijão com manga"}
    ]

    const tasksReducer = (state, action) => {
        switch(action.type){
            case "ADD": {

                const newTask = {
                    id: Math.random(),
                    text: taskText
            };


            setTaskText("");

            return [...state, newTask];
        }
            case "DELETE":{
                return state.filter((tasks) => tasks.id !== action.id)
            }
            default:{
                return state;
            }
        }
    }

    const [taskText, setTaskText] = useState("");
    const [tasks, dispatchTasks] = useReducer(tasksReducer, initialTasks);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatchTasks({type: "ADD"})
    }

    const removeTask = (id) => {
        dispatchTasks({type: "DELETE", id})
    }

  return (
    <div>
        <h2>useReducer</h2>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Mudar Número</button>
        <h3>Tasks:</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)}/> 
            <input type="submit" value="Enviar"/>
        </form>
        {tasks.map((tasks) => (
            <li onDoubleClick={() => removeTask(tasks.id)} key={tasks.id}>Texto: {tasks.texto}</li>
        ))}
        <hr />
    </div>
  )
}

export default HookUseReducer