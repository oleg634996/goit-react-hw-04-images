import axios from 'axios';
const KEY = '24448107-fedb049fce312b69b088c85de';

const fetchImages = async (page, title) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${title}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
export default fetchImages;
