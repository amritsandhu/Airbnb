import "./SleepingDetails.css";
import { BiBed } from "react-icons/bi";
function SleepingDetails() {
  return (
    <div className="sleepDescription">
      <h1 className="heading">Where you'll sleep</h1>
      <div className="sleepMessage">
        <div className="bedroom">
          <i className="bedIcon">
            <BiBed />
            <br />
          </i>
          <h2 className="textOne">
            Bedroom
            <br />
          </h2>
          <div className="textTwo">1 queen bed</div>
        </div>
      </div>
    </div>
  );
}
export default SleepingDetails;
