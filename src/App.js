import CalculatorForm from './calculator/CalculatorForm';
import logo from './logo.svg';
import './App.css';

const title = "React Kalkulačka"

function App() {
  return (
    <div className="App">
      <h1>{title}</h1>
      <CalculatorForm />
    </div>
  );
}

export default App;
