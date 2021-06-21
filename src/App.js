import './App.css';
import Nav from './Components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routers from './Components/Routers';
import Top from './Components/Top';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routers></Routers>
      <Top></Top>
    </div>
  );
}

export default App;
