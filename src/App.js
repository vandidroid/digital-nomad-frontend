import './App.css';
import Countries from './components/Countries';
import Menu from './components/Menu';

function App() {
  const items = ['Countries', 'Locations', 'Digital Nomads'];

  return (
    <div className="App">
     <Menu items={items} />
     <Countries /> 
    </div>
  );
}

export default App;
