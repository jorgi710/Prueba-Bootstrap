import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className=" container mt-5 text-center">
      <div className="row">
        <div className="col-4">
          <Header/>
        </div>
        <div className="col-4">
        <Header/>
        </div>
        <div className="col-4">
        <Header/>
        </div>
      </div>
    </div>
  );
}

export default App;
