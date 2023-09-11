import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { toPng } from "html-to-image";

function Display() {
  const [downloadUrl, setDownloadUrl] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const imageRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setPreviewUrl(imageUrl);
  };

  const handleDownload = async () => {
    try {
      const dataUrl = await toPng(imageRef.current);
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "grayscale_image.png";
      a.click();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="headingDiv" className="container">
      <h1 className="display-6">Image Editor</h1>
      <p className="code">
        Please select an image and style it with the "GrayScale Button.
        <br />
        Please reclick a button to revert the image to its original state.
      </p>
      <input
        type="file"
        style={{ cursor: "pointer" }}
        onChange={handleImageChange}
      />
      {previewUrl && (
        <img
          src={previewUrl}
          alt="Your Image"
          ref={imageRef}
          id={isClicked ? "grayScale" : "selectedImage"}
        />
      )}

      <section className="container" id="buttonContainer">
        <button
          className="btn btn-success"
          onClick={() => setIsClicked((prevState) => !prevState)}
        >
          GrayScale
        </button>
        <button className="btn btn-success" onClick={handleDownload}>
          Download
        </button>
      </section>
    </div>
  );
}

export default function DisplayHtml() {
  return <Display />;
}
