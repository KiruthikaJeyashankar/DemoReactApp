import './App.css';
import GitProfile from './components/git-profile/GitProfile';

function App() {
  return (
    <div className="App">
      <GitProfile url={"https://api.github.com/users/<userName>"} />
    </div>
  );
}

export default App;
