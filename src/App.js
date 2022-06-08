import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import TaxCalc from './Functions/TaxCalculate';
import Result from './Functions/Equals';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Tax" element={<TaxCalc />}/>
        <Route path="/savings" element={<Result />}/>
      </Routes>
    </div>
  );
}

export default App;
