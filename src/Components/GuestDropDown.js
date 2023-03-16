import React, { useState, useEffect, useRef } from "react";
import "./GuestDropDown.css";

const GuestDropdown = () => {
  const [selectedOption] = useState("Guests");
  const [isOpen, setIsOpen] = useState(false);
  const [counts, setCounts] = useState({
    Adults: 0,
    Children: 0,
    Infants: 0,
    Pets: 0,
  });

  const [total, setTotal] = useState(0); // state for total count

  const options = ["Adults", "Children", "Infants", "Pets"];
  const dropdownRef = useRef(null);

  useEffect(() => {
    // add event listener to document object
    document.addEventListener("click", handleClickOutside);
    return () => {
      // remove event listener when component unmounts
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTotal(counts.Adults + counts.Children + counts.Infants + counts.Pets);
  }, [counts]);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleIncrement = (option, event) => {
    event.stopPropagation();
    setCounts((prevCounts) => ({
      ...prevCounts,
      [option]: prevCounts[option] + 1,
    }));
  };

  const handleDecrement = (option, event) => {
    event.stopPropagation();
    if (counts[option] > 0) {
      setCounts((prevCounts) => ({
        ...prevCounts,
        [option]: prevCounts[option] - 1,
      }));
    }
  };

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="guestDropdownContainer">
      <div
        className="dropDown"
        id="guests"
        onClick={toggleOptions}
        ref={dropdownRef}
      >
        <div className="selectedOption">
          {selectedOption}: {total}
        </div>
        {isOpen && (
          <div className="options">
            {options.map((option) => (
              <div className="ourKey" key={option}>
                {option} :{" "}
                <span className="buttonOne">
                  <button
                    className="plus"
                    onClick={(event) => handleIncrement(option, event)}
                  >
                    +
                  </button>
                </span>
                {counts[option]}
                <span className="buttonTwo">
                  <button
                    className="minus"
                    onClick={(event) => handleDecrement(option, event)}
                  >
                    -
                  </button>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GuestDropdown;
