import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    per_page: 12,
    key: '28704942-6968b84373f0d7bd37bb26e4e',
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export const getImages = async (name, page) => {
  const { data } = await instance.get('/', {
    params: {
      q: name,
      page,
    },
  });
  return data;
};
