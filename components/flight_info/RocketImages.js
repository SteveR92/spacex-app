import styles from "../../scss/flightinfo.module.scss";
import imageStyles from "../../scss/rocketImage.module.scss";
import RocketImage from "./RocketImage";
const RocketImages = ({ props }) => {
  let images = props.links.flickr_images;
  return (
    <div className={imageStyles.imageContainer}>
      <div className={styles.photoCard}>
        <h2>Images</h2>
        <div className={imageStyles.cardsSlider}>
          <RocketImage props={images} />
        </div>
      </div>
    </div>
  );
};

export default RocketImages;
