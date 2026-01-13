import React, { useEffect, useLayoutEffect, useState } from 'react'

const HookUseLayoutEffect = () => {

    // 1. Criamos um estado chamado "name" com valor inicial "Qualquer nome"
    const [name, setName] = useState("Qualquer  nome")

    // 2. useEffect é executado **depois** do componente renderizar e pintar na tela.
    // Aqui, ele imprime "2" no console e muda o nome para "Mudou de Nome".
    useEffect(() => {
        console.log("2") // será exibido **depois do layout pintar**
        setName("Mudou de Nome") // atualiza o estado, gerando um re-render
    }, [])

    // 3. useLayoutEffect é executado **antes** do navegador pintar a tela.
    // Ele bloqueia a pintura até que seu código seja executado.
    useLayoutEffect(() => {
        console.log("1") // será exibido **antes da tela atualizar**
        setName("Outro nome") // atualiza o estado imediatamente
    }, [])

    // 4. Aqui, este console.log será executado **em cada renderização** do componente
    console.log(name)
