import { useState } from "react";

const Home = () => {
    
    const [name, setName] = useState('marrio');

    const [age, setAge] = useState(50);

    const handleClick = () => {
       setName("Waqqar");
       setAge(30);
    }

    return ( 
            <div className="home">
                <h1>Home Component</h1>
                <p>{ name } is {age} old Janab</p>
                    <button onClick={handleClick}>Click me</button>
            </div>
       
     );
}
 
export default Home;