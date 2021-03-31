import "./App.css";
import Header from "./components/Header";

import { faGem, faStar, faTooth } from "@fortawesome/free-solid-svg-icons";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Description from "./components/Description";

function App() {
  return (
    <div className=" container mt-5 ">
      <div className="row border">
        <div className="col-4 border shadow-lg p-3 mb-5 bg-body rounded">
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
          <Description
            title_description="Limited time During Covid-19 Crisis!"
            text_description_price="Price increase to $6,999"

            description_price_messages="Virtual Training!"
          />
          <Footer
            text_footer="COMPANY SIGN UP FOR:"
            parrafo_footer="PLATINUM-DIAMOND-MEMBERSHIP™"
          />
        </div>
        <div className="col-4 border shadow-lg p-3 mb-5 bg-body rounded">
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
          <Footer
            text_footer="COMPANY SIGN UP FOR:"
            parrafo_footer="PLATINUM-PLATINUM-MEMBERSHIP™"
          />
        </div>
        <div className="col-4 border shadow-lg p-3 mb-5 bg-body rounded">
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
          <Footer
            text_footer="COMPANY SIGN UP FOR:"
            parrafo_footer="PLATINUM-DENTAL 'D'-MEMBERSHIP™"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
