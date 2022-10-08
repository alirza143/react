import { useState } from "react";
import { useHistory } from 'react-router-dom'

const Create = () => {

    const [title, setTitle] = useState('asdfasdfsd');
    const [body, setBody] = useState('adsfsadfsdf');
    const [author, setAuthor] = useState('yoshi');
    const [isPending, setIsPending] = useState(true);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author };
        setIsPending(false);
        setTimeout( () => {
        fetch('http://localhost:8000/blogs/',{
            method: 'POST',
            headers: { "content-type": "application/json" },
            body : JSON.stringify(blog)
        }).then(() => {
            setIsPending(true);
            console.log("blog is added");
            history.push("/");
        })}, 1000)
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value = {body}
                    onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                 value = {author}
                 onChange = {(e) => setAuthor(e.target.value)}
                 >
                    <option value="mario"> mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { isPending && <button>Add Blog</button> }
                { !isPending && <button disable="true" >Adding Blog...</button>}
                <p>{ body }</p>
            </form>
        </div>
    );
}
 
export default Create;