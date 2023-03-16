import "./SelfCheckIn.css";
import { FaAngellist } from "react-icons/fa";
function SelfCheckIn() {
  return (
    <div className="checkIn">
      <i className="checkInIcon">
        <FaAngellist />
      </i>
      Self check-in
      <br />
      <span className="message">Check yourself in with the keypad</span>
    </div>
  );
}
export default SelfCheckIn;
