import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import TaxCalc from './Functions/TaxCalculate';
import Result from './Functions/Equals';
import SideProfile from './components/SideProfile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SideProfile />} />
        <Route path="/Tax" element={<TaxCalc />}/>
        <Route path="/savings" element={<Result />}/>
      </Routes>
    </div>
  );
}

export default App;
