import './App.css';
import Routes from "./Routes";

function App() {
    return (
        <div>
            <a href="/list" className="btn btn-primary">List</a>
            <a href="/add" className="btn btn-primary">Add</a>
            <Routes/>
        </div>
    );
}

export default App;
