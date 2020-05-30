import styles from "../../scss/flights/flightinfo.module.scss";
import imageStyles from "../../scss/flights/rocketImage.module.scss";
import RocketImage from "./RocketImage";
const RocketImages = ({ props }) => {
  let images = props.links.flickr_images;
  return (
    <div className={imageStyles.imageContainer}>
      <div className={imageStyles.cardsSlider} id={imageStyles.cardsSlider}>
        <RocketImage props={images} />
      </div>
    </div>
  );
};

export default RocketImages;
