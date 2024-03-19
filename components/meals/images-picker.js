"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from 'next/image'

export default function ImagePicher({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageRef = useRef();


 

  function onButtonClick() {
    imageRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
            {!pickedImage && <p>No image picked yet!</p>}
            {pickedImage && <Image src={pickedImage} alt='picked image' fill/>}
        </div>
        <input
          onChange={handleImageChange}
          ref={imageRef}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          required
        />
        <button
          onClick={onButtonClick}
          className={classes.button}
          type="button"
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
