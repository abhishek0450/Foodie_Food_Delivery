
import PropTypes from 'prop-types';
import './ResCard.css';


const ResCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="card">
      <img className='res-image' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <div>
         <h4>
          
          {avgRating}
        </h4>
        <h5>{lastMileTravelString}</h5>
        <h5>{costForTwoString}</h5>
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


