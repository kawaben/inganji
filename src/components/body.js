import React from "react";
import ParallaxSection from "./Parallax";
const Parallax = () => {
  const parallaxData = [
    {
        image: `${process.env.PUBLIC_URL}/images/15.jpg`,
        title: "Welcome to Section 1",
        description: "This is the first parallax section.",
    },
    {
       
        title: "Welcome to Section 2",
        description: "This is the second parallax section.",
    },
    {
        image: `${process.env.PUBLIC_URL}/images/17.png`,
        title: "Welcome to Section 3",
        description: "This is the third parallax section.",
    },
    {
      image: "https://via.placeholder.com/1920x1080?text=Parallax+4",
      title: "Welcome to Section 4",
      description: "This is the fourth parallax section.",
    },
  ];

  return (
    <div>
      {parallaxData.map((section, index) => (
        <ParallaxSection
          key={index}
          image={section.image}
          title={section.title}
          description={section.description}
        />
      ))}
      <section className="content-section">
        <h2>Regular Content</h2>
        <p>This is a normal section between the parallax sections.</p>
      </section>
    </div>
  );
};

export default Parallax;
