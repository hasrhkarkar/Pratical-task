import React from "react";
import "./AboutUs.scss";

const AboutUs = () => {
  // JSON data for dynamic rendering
  const aboutData = {
    title: "About Us",
    text: `In Kindergarten Preschool, we believe every child is special. They deserve
    good nurturing and care in a safe environment along with lots of fun-based
    play activities. At an age where enjoyment is key to a child, education
    should build curiosity and interest within them.`,
    button: "more",
    birdImage: "/images/bird-first.svg",
    photos: [
      { id: 1, src: "/images/about-1.svg", alt: "about 1" },
      { id: 2, src: "/images/about-2.svg", alt: "about 2" },
      { id: 3, src: "/images/about-3.svg", alt: "about 3" },
    ],
  };

  return (
    <section className="about-section">
      <div className="about-inner">
        <div className="about-left">
          {aboutData.photos.map((photo, index) => (
            <div key={photo.id} className={`photo photo-${index + 1}`}>
              <img src={photo.src} alt={photo.alt} />
            </div>
          ))}
        </div>

        <div className="about-right">
          <h3 className="about-title">{aboutData.title}</h3>
          <p className="about-text">{aboutData.text}</p>
          <button className="about-btn">{aboutData.button}</button>
        </div>

        <img
          src={aboutData.birdImage}
          className="about-bird"
          alt="bird"
        />
      </div>
    </section>
  );
};

export default AboutUs;
