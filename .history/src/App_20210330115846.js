import './App.css';
import Header from './components/Header';
import { faGem, faStar } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className=" container mt-5 text-center">
      <div className="row">
        <div className="col-4 ">
          <Header 
            title_header = "TITLE 1"
            parrafo_header= "BEST VALUE MEMBERSHIP!" 
            icon_header={faGem}          
          />       
        </div>
        <div className="col-4">
        <Header
          title_header = "TITLE 2"
          parrafo_header = "MOST ECONOMICAL PLAN!"
          icon_header={faStar} 
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
