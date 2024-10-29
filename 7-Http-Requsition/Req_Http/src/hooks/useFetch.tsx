import { useEffect, useState } from "react"




//4- custom hook
export const useFetch = (url: string) => {

    const [data, setData] = useState('');

    //5- refatorando post no custom hook
    // const [config, setConfig] = useState();
    // const [method, setMethod] = useState();
    // const [callFetch, setCallFetch] = useState(false);


    // const httpConfig = (data: any, method: string) => {
    //     if (method === "POST") {
    //       setConfig({
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data),
    //       });
    
    //       setMethod("POST")
    //     }

    useEffect(() => {

        const fetchData = async () => {
            
            const response = await fetch(url)
            const data = await response.json();
            setData(data);
        }

        fetchData();
    }, [url, {/*callFetch*/}])


        //5- refatorando post no custom hook
        // useEffect(() => {

        //     const httpRequest = async () => {
        //         if (method === "POST") {
                   
        //           // 5 - refatorando post
        //           let fetchOptions = [url, config];
          
        //           const res = await fetch(...fetchOptions);
          
        //           const json = await res.json();
          
        //           setCallFetch(json)
        //         }

        //     httpRequest(); 
        // }, [config])

    return { data };
}