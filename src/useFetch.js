
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(null);


    // const is not using beacuse it does not return anything.
    // passing empty dependenciy array will only run the function once.
    // passing value in array will add dependency, when the valud change useEffect will run again
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error("There is some problem of fetching this data");
                }
                return res.json()
            })
            .then(data => {
                // console.log(data);
                setData(data);
                setIsPending(false);
                setIsError(null);
            }).catch(err => {
                setIsPending(false);
                setIsError(err.message);
            })
        }, 1000)
        //dependency [url]
    }, [url]);

    return {data, isPending, isError}
}

export default useFetch;