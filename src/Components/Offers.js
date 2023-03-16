import "./Offers.css";
import {
  GiFlowerPot,
  GiMonumentValley,
  GiSittingDog,
  GiMountainCave,
  GiCctvCamera,
} from "react-icons/gi";
import { AiOutlineWifi, AiFillCar } from "react-icons/ai";
import { MdPool, MdOutlineHotTub } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";

function Offers() {
  return (
    <div className="offers">
      <h1 className="placeOffers">What this place offers</h1>
      <div className="listContainer">
        <ul className="listOne">
          <li>
            <GiFlowerPot />
            Garden view
          </li>
          <li>
            {" "}
            <GiMonumentValley />
            Valley view
          </li>
          <li>
            {" "}
            <AiOutlineWifi />
            wifi
          </li>
          <li>
            <MdPool />
            Shared outdoor pool
          </li>
          <li>
            {" "}
            <GiSittingDog />
            pets allowed
          </li>
        </ul>
        <ul className="listTwo">
          <li>
            {" "}
            <GiMountainCave /> Mountain View
          </li>
          <li>
            {" "}
            <TbToolsKitchen2 />
            Kitchen
          </li>
          <li>
            <AiFillCar />
            Free parking on Premises
          </li>
          <li>
            <MdOutlineHotTub />
            Shared Hot Tub
          </li>
          <li>
            {" "}
            <GiCctvCamera /> Security Cameras on property
          </li>
        </ul>
      </div>

      <div className="amenities">
        <button className="buttonAmenities">Show all 48 amenities</button>
      </div>
    </div>
  );
}
export default Offers;
