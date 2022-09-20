import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        {/* call the variable that we created earlier */}
        <div className="content">{ title }</div>
        <p>likes it { likes } time</p>
        <p>array {[1,2,3,4,5,6]}</p>
        <a href={ link }>
          google link
        </a>
      </h1>
    </div>
  );
}

export default App;
