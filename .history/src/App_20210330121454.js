import './App.css';
import Header from './components/Header';

import { faGem, faStar, faTooth } from '@fortawesome/free-solid-svg-icons'
import Content from './components/Content';


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
          <Content
            title_name="Platinum Membership"
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
          icon_header={faTooth} 
        />
        </div>
      </div>
    </div>
  );
}

export default App;
