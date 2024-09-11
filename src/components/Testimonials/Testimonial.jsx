import React from "react";
import "./testimonial.css";
import Family1 from "../../assets/images/Family1.jpeg";
import Family2 from "../../assets/images/Family2.jpg";

export function Testimonial() {
  return (
    <section className="TestimonialMainSec">
      <div className="TestimonialMainDiv">
        <p id="TestimonialsTittle">testimonials</p>
        <div className="DisplayDivTestimonials">
          <div className="ImageOneDivTesti">
            <img src={Family1} id="TestimonialPics" />
          </div>
          <div className="ActualTestimonial1">
            <p id="ActualTestimonial">
              These recipes made cooking so easy!My family loves every
              dish.Highly recommend for busy weeknights!
            </p>
          </div>
          <div className="ActualTestimonial2">
            <p id="ActualTestimonial">
              Incredible flavors and simple instructions.I’ve tried three
              recipes so far and each one turned out amazing!
            </p>
          </div>
          <div className="ActualTestimonial3">
            <p id="ActualTestimonial">
              I never knew cooking could be this fun!Your recipes have
              transformed my meals into something special.
            </p>
          </div>
          <div className="ActualTestimonial4">
            <p id="ActualTestimonial">
              The ingredients are so fresh and the recipes are foolproof.My
              confidence in the kitchen has skyrocketed!
            </p>
          </div>
          <div className="ActualTestimonial5">
            <p id="ActualTestimonial">
              Tried the pasta recipe and it was a hit!Easy,quick and absolutely
              delicious.Will order again!
            </p>
          </div>
          <div className="ImageTwoDivTesti">
            <img src={Family2} id="TestimonialPics" />
          </div>
        </div>
      </div>
    </section>
  );
}
