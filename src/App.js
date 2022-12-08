import { NavLink, Route, Routes } from 'react-router-dom';
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
          <NavLink
            className={({ isActive }) => (isActive ? 'activeLink' : undefined)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>&#124;</li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'activeLink' : undefined)}
            to="/calculator"
          >
            Calculator
          </NavLink>
        </li>
        <li>&#124;</li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'activeLink' : undefined)}
            to="/quote"
          >
            Quote
          </NavLink>
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
