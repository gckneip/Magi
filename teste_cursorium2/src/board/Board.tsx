import './Board.css';
import InputEquation from './components/InputEquation/InputEquation';
import InputTable from './components/InputTable/InputTable';

export default function Board() {

  return (
  <div className="Board">
    <div className="Board1">
      <div className="EquationDiv">
        <InputEquation/>
      </div>
      <div className="TableDiv">
        <InputTable/>
      </div>
    </div>
    <div className="CircuitDiv">
    Coming Soon!
    </div>
  </div>
  );
}