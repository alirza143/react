const Home = () => {
    const handleClick = () => {
        console.log("clicked");
    }

    const handleClickAgain = (name) => {
        console.log(name)
    }
    return ( 
            <div className="home">
                <h1>Home Component</h1>
                    <button onClick={handleClick}>Click me</button>
                    <button onClick={() => {
                        handleClickAgain("you are clicked again")
                    } }>Click me</button>
            </div>
       
     );
}
 
export default Home;