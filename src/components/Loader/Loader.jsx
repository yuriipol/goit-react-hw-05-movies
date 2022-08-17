import { Circles } from 'react-loader-spinner';
import style from './Loader.module.css';
const Loader = () => {
  return (
    <div className={style.loader}>
      <Circles color="green" height={280} width={1280} />
    </div>
  );
};

export default Loader;
