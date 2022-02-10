import "./App.css";
import Heading from "./components/Heading";
import Loader from "./components/Loader";
import UnSplashImage from "./components/UnSplashImage";
import { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [images, setImages] = useState([]);
  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com/";
    axios
      .get(
        `${apiRoot}/photos/random?client_id=zGj_GALyp3DfGABuqOFOy8BP57Wz3sdxHQ8rCiliJTA&count=10`
      )
      .then((res) => setImages([...images, ...res.data]));
  };
  // const accesskey = process.env.REACT_APP_ACCESSKEY;
  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <div className="app">
      <Heading />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        loader={<Loader />}
        hasMore={true}
      >
        <div className="wrapper">
          {images.map((image) => {
            return <UnSplashImage key={image.id} url={image.urls.thumb} />;
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default App;
