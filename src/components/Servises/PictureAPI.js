import axios from 'axios';

async function fetchImages(name, page) {
  const response = await axios(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=28704942-6968b84373f0d7bd37bb26e4e&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}

export default fetchImages;
