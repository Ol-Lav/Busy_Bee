import warmFlowers from '../../images/flowers-2.png';
import './PageNotFound.scss';


export const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <h1 className="pageNotFound_text">
        Page Not Found
      </h1>
      <img
        src={warmFlowers}
        alt="Flowers and Bees"
        className="pageNotFound_img"
      />
    </div>
  );
};
