import "./App.css";
import Header from "./components/Header";

import { faGem, faStar, faTooth } from "@fortawesome/free-solid-svg-icons";
import Content from "./components/Content";

function App() {
  return (
    <div className=" container mt-5 ">
      <div className="row border">
        <div className="col-4 border">
          <Header
            title_header="TITLE 1"
            parrafo_header="BEST VALUE MEMBERSHIP!"
            icon_header={faGem}
          />
          <Content
            title_name="Platinum Membership Benefits:"
            list_1="45 WorksShops included"
            list_2="Value at $52,000"
            list_3="Platinium-Virtual Training"
            list_4="Hands-On Live Patient Training Courses in"
            list_more_1="Aesthetics"
            list_more_2="Anti Aging"
            list_more_3="Pain Management and more"
            list_5="Advanced Courses Included"
            list_6="Expert Physician Instructors"
            list_7="Access to Special Events"
            list_8="CME and Certificate"
            list_9="Diamond Benefits-too many to list here"
          />
        </div>
        <div className="col-4 border">
          <Header
            title_header="TITLE 2"
            parrafo_header="MOST ECONOMICAL PLAN!"
            icon_header={faStar}
          />
          <Content
            title_name="Platinum Membership Benefits:"
            list_1="45 WorksShops included"
            list_2="Value at $52,000"
            list_3="Platinium-Virtual Training"
            list_4="Hands-On Live Patient Training Courses in"
            list_more_1="Aesthetics"
            list_more_2="Anti Aging"
            list_more_3="Pain Management and more"
            list_5="Advanced Courses Included"
            list_6="Expert Physician Instructors"
            list_7="Access to Special Events"
            list_8="CME and Certificate"
            list_9="Diamond Benefits-too many to list here"
          />
        </div>
        <div className="col-4 border">
          <Header
            title_header="TITLE 3"
            parrafo_header="FOR DENTISTS AND ORAL!"
            icon_header={faTooth}
          />
          <Content
            title_name="Platinum Membership Benefits:"
            list_1="45 WorksShops included"
            list_2="Value at $52,000"
            list_3="Platinium-Virtual Training"
            list_4="Hands-On Live Patient Training Courses in"
            list_more_1="Aesthetics"
            list_more_2="Anti Aging"
            list_more_3="Pain Management and more"
            list_5="Advanced Courses Included"
            list_6="Expert Physician Instructors"
            list_7="Access to Special Events"
            list_8="CME and Certificate"
            list_9="Diamond Benefits-too many to list here"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
