import './App.css';
import Header from './components/Header';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{} from "@fortawesome/react-fontawesome"


function App() {
  return (
    <div className=" container mt-5 text-center">
      <div className="row">
        <div className="col-4">
          <Header 
            title_header = "TITLE 1"
            parrafo_header = "BEST VALUE MEMBERSHIP!"
            icon={faGem}
          />
        </div>
        <div className="col-4">
        <Header
          title_header = "TITLE 2"
          parrafo_header = "MOST ECONOMICAL PLAN!"
        />
        </div>
        <div className="col-4">
        <Header
          title_header = "TITLE 3"  
          parrafo_header = "FOR DENTISTS AND ORAL SURGEONS!"
        />
        </div>
      </div>
    </div>
  );
}

export default App;
