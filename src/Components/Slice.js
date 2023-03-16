import "./Slice.css";
import OurCalendar from "./OurCalendar.js";
import CheckInOut from "./CheckInOut";
import Offers from "./Offers.js";
import GuestDropdown from "./GuestDropDown";
import Reviews from "./Reviews";
import OwnerInfo from "./OwnerInfo";
import SelfCheckIn from "./SelfCheckIn";
import BookingInfo from "./BookingInfo";
import AvailabilityAndOffer from "./AvailabilityAndOffer";
import SleepingDetails from "./SleepingDetails";
import AmountPerNight from "./AmountPerNight";

export default function Slice() {
  const handleAvailabiltyClick = () => {
    alert(`Your Dates have been Reserved:`);
  };

  return (
    <div className="square">
      <div className="outerSquare">
        <div className="firstSquare">
          <OwnerInfo />
          <SelfCheckIn />
          <BookingInfo />
          <AvailabilityAndOffer />
          <SleepingDetails />
          <Offers />

          <div className="ourCalendar">
            <div className="rangeCalendar">
              <OurCalendar />
            </div>
          </div>
        </div>
        <div className="alightRightBox">
          <div className="borderRightBox">
            <div className="innerSquare">
              <div>
                <div className="eigth">
                  <div className="Ninth">
                    <AmountPerNight />
                    <div className="innerBox">
                      <div className="checkIn-Out">
                        <div>
                          <CheckInOut />
                        </div>
                      </div>
                      <div>
                        <GuestDropdown />
                      </div>
                      <button
                        className="checkDates"
                        onClick={handleAvailabiltyClick}
                      >
                        Reserve
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  );
}
