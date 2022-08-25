import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/movie',
  params: {
    // per_page: 12,
    api_key: '995e05884fd0ec30189499a041c3fca1',
    // image_type: 'photo',
    // orientation: 'horizontal',
  },
});

export const getImages = async (name, page) => {
  const { data } = await instance.get('/', {
    params: {
      query: name,
      page,
    },
  });
  return data;
};
