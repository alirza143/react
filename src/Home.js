import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(null);


    // const is not using beacuse it does not return anything.
    // passing empty dependenciy array will only run the function once.
    // passing value in array will add dependency with name
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok){
                    throw Error("There is some problem of fetching this data");
                }
                return res.json()
            })
            .then(data => {
                // console.log(data);
                setBlogs(data);
                setIsPending(false);
                setIsError(null);
            }).catch(err => {
                setIsPending(false);
                setIsError(err.message);
            })
        }, 1000)
    }, []);
    return ( 
        <div className="home">
            { isError && <div>{ isError }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title = "All Blogs"/> }
        </div>
     );
}
 
export default Home;