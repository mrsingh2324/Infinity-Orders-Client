import logo from './logo.svg';
import './App.css';
import Logo from './images/Logo-png.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo}  alt="logo" />
        <p>
          Hello Visitor
        </p>
        <p>
          We Are Building!
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/andrew-lee-0a2a2a1b0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
      
    </div>
  );
}

export default App;
