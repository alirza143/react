import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);


    // const is not using beacuse it does not return anything.
    // passing empty dependenciy array will only run the function once.
    // passing value in array will add dependency with name
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                // console.log(data);
                setBlogs(data);
                setIsPending(false);
            })
        }, 1000)
    }, []);
    return ( 
        <div className="home">
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title = "All Blogs"/> }
        </div>
     );
}
 
export default Home;