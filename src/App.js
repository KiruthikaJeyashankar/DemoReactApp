import './App.css';
import GitProfile from './components/git-profile/GitProfile';
import logo from "./logo.svg";
import Counter from "./counter/Counter";

function App() {
  return (
    <div className="App">
      <GitProfile url={"https://api.github.com/users/<userName>"} />
      <Counter />
    </div>
  );
}

export default App;
