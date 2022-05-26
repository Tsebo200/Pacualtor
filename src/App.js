import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import TaxCalc from './Functions/TaxCalculate';
import Result from './Functions/Equals';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TaxCalc/>}/>
        <Route path="/savings" element={<Result />}/>
      </Routes>
    </div>
  );
}

export default App;
