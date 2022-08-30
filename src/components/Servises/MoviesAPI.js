import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '995e05884fd0ec30189499a041c3fca1',
  },
});

export const getTrendingMovies = async () => {
  const { data } = await instance.get('/trending/movie/day', {
    params: {},
  });

  return data;
};

export const getSerchMovies = async (name, page) => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query: name,
      page: page,
    },
  });
  return data;
};

export const getSerchDetailsMovie = async moviId => {
  const { data } = await instance.get(`movie/${moviId}`, {
    params: {
      movie_id: moviId,
    },
  });
  return data;
};
export const getSerchDetailsMovieActors = async moviId => {
  const { data } = await instance.get(`movie/${moviId}/credits`, {
    params: {
      movie_id: moviId,
    },
  });
  return data;
};

export const getSerchDetailsMovieReviews = async moviId => {
  const { data } = await instance.get(`movie/${moviId}/reviews`, {
    params: {
      movie_id: moviId,
    },
  });
  return data;
};
