import logo from "../Images2/logo.webp";
import "./OwnerInfo.css";
function OwnerInfo() {
  return (
    <div className="container">
      <div className="ownerNames">
        Entire gueshouse hosted by Reverie
        <br />
        Retreat (Tamara and Ramon)
        <br />
        <span className="rooms">guests 1 bedroom 1 bed 1 bath</span>
      </div>
      <div className="circle">
        <div className="picLogo">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}
export default OwnerInfo;
