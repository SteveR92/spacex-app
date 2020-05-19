import styles from "../../scss/rocketImage.module.scss";
import Modal from "react-modal";
import React, { useState } from "react";
import Lightbox from "../Lightbox";

const RocketImage = ({ props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageKey, setImageKey] = useState();
  const lightBox = (e) => {
    e.persist();
    setIsOpen(true);
    setImageKey(e._targetInst.key);
  };

  let imageArr = [];
  for (let i in props) {
    imageArr.push(props[i]);
  }
  return (
    <div>
      {props.map((image, index) => {
        return (
          <div className={styles.card}>
            <img
              src={image}
              key={index}
              alt="rocket"
              id={styles.rocketImage}
              onClick={(e) => lightBox(e)}
            />
          </div>
        );
      })}
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <div className={styles.lightboxImage}>
          <img src={imageArr[imageKey]} alt="rocket" id={styles.rocketImage} />
        </div>
      </Modal>
    </div>
  );
};
export default RocketImage;
