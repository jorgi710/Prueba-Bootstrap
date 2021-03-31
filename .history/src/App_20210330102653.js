import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className=" container mt-5 text-center">
      <div className="row">
        <div className="col-4">
          <Header 
            title_header = "TITLE 1"
            parrafo_header = "BEST VALUE MEMBERSHIP!"
          />
        </div>
        <div className="col-4">
        <Header
          title_header = "TITLE 2"
        />
        </div>
        <div className="col-4">
        <Header
          title_header = "TITLE 3"  
        />
        </div>
      </div>
    </div>
  );
}

export default App;
