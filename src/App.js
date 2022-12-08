import { Link, Route, Routes } from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';
import Home from './pages/Home';
import Quote from './pages/Quote';
import './App.css';

const App = () => (
  <>
    <nav>
      <div id="logo">Math Magicians</div>
      <ul>
        <li>
          <Link className="Links" to="/">Home</Link>
        </li>
        <li>&#124;</li>
        <li>
          <Link className="Links" to="/calculator">Calculator</Link>
        </li>
        <li>&#124;</li>
        <li>
          <Link className="Links" to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
    {/* <Calculator />; */}
  </>
);
export default App;
