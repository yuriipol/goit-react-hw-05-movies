import PropTypes from 'prop-types';
import style from './Button.module.css';
const Button = ({ onClick }) => {
  return (
    <button className={style.loadMore} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
