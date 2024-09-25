
import PropTypes from 'prop-types';
import './ResCard.css';


const ResCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className="card">
      <div className="card-contents">
      <img className='res-image' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
      <p className='card-data'>{name}</p>
      
      <p>{areaName}</p>
        <p>{cuisines.slice(0, 3).join()}</p>
        <p>{avgRating}</p>
        <p>{sla.slaString}</p>
        <p>{costForTwo}
        </p>
      
      </div>
       
      
    </div>
  );
};

ResCard.propTypes = {
  cloudinaryImageId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
  area: PropTypes.string.isRequired,
  lastMileTravelString: PropTypes.string.isRequired,
  costForTwoString: PropTypes.string.isRequired,
  avgRating: PropTypes.string.isRequired
  
};

export default ResCard;


