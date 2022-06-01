import './App.css';
import theJedsLogo from './images/Logo-TheJeds.png'

function App() {
  return (
    <div className="App">
      <div className='container-TheJeds-logo'>
        <img src={theJedsLogo} className='TheJeds-logo' alt='Logo TheJeds' />
      </div>
      <div className='container-calculadora'>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
