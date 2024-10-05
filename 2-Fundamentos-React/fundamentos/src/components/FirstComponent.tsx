interface props{
    texto: string;
}


function FirstComponent({texto}: props){


    return(
        <div>
            <h1>{texto}</h1>
            <button onClick={() => window.alert("Que bacanaa")}>CLique aqui</button>
        </div>
    )

    
}

export default FirstComponent;