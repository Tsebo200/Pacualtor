import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import TaxCalc from './Functions/TaxCalculate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TaxCalc/>}/>
      </Routes>
    </div>
  );
}

export default App;
