import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <br></br>
            <p className="mid">
            "Welcome to [Restaurant Name], where culinary excellence meets warm hospitality. Nestled in the heart of [City/Location], our restaurant is a haven for food enthusiasts seeking unforgettable dining experiences. With a passion for crafting exquisite dishes using the finest ingredients, we invite you to embark on a journey of flavors curated by our talented chefs. Whether you're savoring our signature dishes, 
            enjoying a cozy meal with loved ones, or celebrating a special occasion, we strive to exceed your expectations at every turn. Join us and indulge in a symphony of tastes, ambiance, and impeccable service, making each visit a memorable celebration of food and fellowship."
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;