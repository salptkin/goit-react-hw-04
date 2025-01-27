import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import getAndSetImages from "./utils/getAndSetImages.js";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  //API
  const url =
    "https://api.unsplash.com/search/photos/?client_id=MhtyoXE5eVx-gYhkxHIh8OSmbWt6bwTVPtS7P5BY-SE&query=" +
    query +
    "&page=" +
    page;

  function openModal(image) {
    setModalImg(image);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setModalImg(null);
  }

  useEffect(() => {
    if (query) {
      if (page > 1) {
        getAndSetImages(url, setLoading, setImages, true);
      } else {
        getAndSetImages(url, setLoading, setImages);
      }
    }
  }, [query, page, url]);

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} setPage={setPage} />
      <ImageGallery images={images} onImgClick={openModal} />
      {loading && <Loader />}
      {images.length > 1 && <LoadMoreBtn setPage={setPage} />}
      {modalImg && (
        <ImageModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          modalImg={modalImg}
        />
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
export default App;
