import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
    const [blogs, setBlogs] = useState([
        { title: 'My new website' , body: 'lorem ipsum ...', author: 'mario' , id: 1 },
        { title: 'Welcome party! ', body: ' lorem ipsum ...', author: 'yoshi' , id: 2 },
        { title: 'Web dev top tips' , body: ' lorem ipsum ...' , author: 'mario' , id: 3 }
        ]);

    const [name, setName] = useState('mario');

    const deleteBlog = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    const changeName = (name) => {
        setName(name);
    }

    // const is not using beacuse it does not return anything.
    // passing empty dependenciy array will only run the function once.
    // passing value in array will add dependency with name
    useEffect(() => {
        console.log("use effect run");
    }, [name]);
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title = "All Blogs" handleDelete = {deleteBlog}/>
            <p>{ name }</p>
            <button onClick={() => changeName("waqqar")}>Change</button>
        </div>
     );
}
 
export default Home;