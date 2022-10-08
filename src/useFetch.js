
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(null);
// our application is running good without about controller so we are not using this. 
// bus add this is case we need it in future.

    // const abortController = new AbortController();
    
    // const is not using beacuse it does not return anything.
    // passing empty dependenciy array will only run the function once.
    // passing value in array will add dependency, when the valud change useEffect will run again
    useEffect(() => {
        setTimeout(() => {
            fetch(url /*, { signal: abortController.signal } */)
            .then(res => {
                if(!res.ok){
                    throw Error("There is some problem of fetching this data");
                }
                return res.json()
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setIsError(null);
            }).catch(err => {

                //if(!err.name == 'AbortError'){
                    setIsPending(false);
                    setIsError(err.message);
                //}
            })
        }, 100)

        // return () => abortController.abort();
        //dependency [url]
    }, [url]);

    return {data, isPending, isError}
}

export default useFetch;