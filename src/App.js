import SearchBar from "./Components/SearchBar";
import Description from "./Components/Description";
import ShowImages from "./Components/ShowImages";
import "./index.css";

import Slice from "./Components/Slice";
import "./Components/ShowAllImages.css";
import ImageSlider from "./Components/ImageSlider";

function App() {
  return (
    <>
      <div className="App">
        <SearchBar placeholder="Start Your Search" />
        <Description />
        <ShowImages />
        <Slice />
        <ImageSlider />
      </div>
    </>
  );
}

export default App;
