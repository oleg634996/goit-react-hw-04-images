import './App.css';
import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import fetchImages from './services/Api';
import { Searchbar } from 'components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';
import { ToastContainer } from 'react-toastify';

export function App() {
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);
  const [searhImg, setSearhImg] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [totalHits, setTotalHits] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (title === '') {
      return;
    }
    fetchImages(page, title).then(response => {
      // console.log(response);
      setIsLoading(false);
      setTotalHits(response.totalHits);
      setSearhImg(prevState => [...prevState, ...response.hits]);
    });
  }, [page, title]);

  const onSubmit = data => {
    // console.log(data);
    if (title !== data) {
      setTitle(data);
      setSearhImg([]);
      setPage(1);
      setIsLoading(true);
    }
  };

  const onClickImg = event => {
    setLargeImageURL(event);
    setShowModal(() => !showModal);
    togglModal();
  };

  const btnMore = () => {
    setPage(prevState => prevState + 1);
    setIsLoading(true);
  };
  const togglModal = event => {
    setShowModal(() => !showModal);
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {searhImg < 1 && <ToastContainer />}
      <ImageGallery onRenderImg={searhImg} onClick={onClickImg} />
      {isLoading && <Loader />}
      {totalHits / 12 > page && <Button onButton={btnMore} />}
      {showModal && <Modal onClose={togglModal} onOpenImg={largeImageURL} />}
    </>
  );
}
