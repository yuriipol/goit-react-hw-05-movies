import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Page/Home';
import Movies from './Page/Movies';
import MovieDetails from './Page/MovieDetails';
import Cast from './Page/Movies/Cast';
import Reviews from './Page/Movies/Reviews';
const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
/* 
      План создания приложения:
    ??1.Сделать фукнцию, отвечающую за выполнение запросов на сервер
    2. Создать компоненты:
      ??2.1. Создать компонент Home, домашняя страница со списком популярных кинофильмов
      ??2.2. Создать компонент Movies, страница поиска фильмов по ключевому слову.
      ??2.3. Создать компонент MovieDetails, страница с детальной информацией о кинофильме.
      2.4. Создать компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
      2.5. Создать компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails
    3. Сделать маршруты
*/
