import React, { useState } from "react";
import "./Projects.css";
const ProjectItem = [
    { id: 1, img: "./assets/Pic1.jpg", title: "Project 1" },
    { id: 2, img: "./assets/Pic2.jpg", title: "Project 2" },
    { id: 3, img: "./assets/Pic3.jpg", title: "Project 3" },
    { id: 4, img: "./assets/Pic4.jpg", title: "Project 4" },
    { id: 5, img: "./assets/Pic1.jpg", title: "Project 1" },
    { id: 6, img: "./assets/Pic2.jpg", title: "Project 2" },
    { id: 7, img: "./assets/Pic3.jpg", title: "Project 3" },
    { id: 8, img: "./assets/Pic4.jpg", title: "Project 4" },
    { id: 9, img: "./assets/Pic1.jpg", title: "Project 1" },
    { id: 10, img: "./assets/Pic2.jpg", title: "Project 2" },
    { id: 11, img: "./assets/Pic3.jpg", title: "Project 3" },
    { id: 12, img: "./assets/Pic4.jpg", title: "Project 4" },
  ];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="ProjectsSection">
        <h1>Portfolio</h1>
        <div className="GalleryGrid">
          <div className="ProjectContainer">
            {ProjectItem.map((item) => {
              const { id, img, title } = item;
              return (
                <div className="ProjectItems Card" key={id}>
                  <div
                    className="ProjectImgWrapper"
                    onClick={() => handleImageClick(img)}
                  >
                    <img src={img} alt={title} className="ProjectImg" />
                  </div>
                  <h3 className="ProjectTitle">{title}</h3>
                </div>
              );
            })}
          </div>
          {selectedImage && (
            <div className="PopupOverlay" onClick={closePopup}>
              <div
                className="PopupContent"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="CloseButton" onClick={closePopup}>
                  ×
                </button>
                <img src={selectedImage} alt="Popup View" className="PopupImage" />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
