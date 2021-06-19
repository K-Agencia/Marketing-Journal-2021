import './App.css';
import Nav from './Components/Nav';
import Catalogo from './Components/Catalogo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
        <Catalogo titulo="innovaciones"></Catalogo>
    </div>
  );
}

export default App;
