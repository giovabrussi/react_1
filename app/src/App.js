import './App.css';
import Ciccio from './Ciccio.js';

function App() {
  return (
    <div className="App">
      <Ciccio nome="Giovanni"/>
      <Ciccio nome="Paolo" eta={2}/>
    </div>
  );
}

export default App;
