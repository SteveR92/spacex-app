import styles from "../../scss/flights/rocketImage.module.scss";
import Modal from "react-modal";
import React, { useState } from "react";

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
        <div className={styles.buttonContainer}>
          <button onClick={() => setIsOpen(false)}>X</button>
        </div>
        <div className={styles.lightboxImageWrapper}>
          <img
            src={imageArr[imageKey]}
            alt="rocket"
            id={styles.lightboxImage}
          />
        </div>
      </Modal>
    </div>
  );
};
export default RocketImage;
