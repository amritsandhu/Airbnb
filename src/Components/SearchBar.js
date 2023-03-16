import "./Bar.css";
import { FaSistrix, FaAirbnb, FaGlobeAmericas } from "react-icons/fa";
import SignUpButton from "./SignUpButton";
import { GrFormSearch } from "react-icons/gr";

function SearchBar({ placeholder }) {
  const handleClick = () => {
    const results = document.querySelector(".buttonInfo").value;
    alert(`Results from your Search: ${results}`);
  };
  return (
    <div className="search">
      <i className="AirBnb">
        <FaAirbnb />
      </i>
      <div className="SearchInputs">
        <button className="searchButton">
          <input
            className="buttonInfo"
            type="text"
            placeholder="Start your search here"
          ></input>
          <div onClick={handleClick} className="searchIcon">
            <i>
              <GrFormSearch />
            </i>
          </div>
        </button>

        <span className="logoContainer">
          <button className="logoButton">Airbnb your home</button>
          <i className="worldIcon">
            <FaGlobeAmericas />
          </i>
          <span className="signButton">
            <SignUpButton />
          </span>
        </span>
      </div>
    </div>
  );
}
export default SearchBar;
