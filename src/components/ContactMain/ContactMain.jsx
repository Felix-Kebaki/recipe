import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";

export function ContactMain() {
  return (
    <section className="ContactMainSec">
      <div className="ContactMainDiv">
        <div className="QuestionMainDiv">
          <p>Question?</p>
          <p>Reach out.</p>
        </div>
        <div className="ContactFormWrapper">
          <form>
            <div>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div>
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Phone Number" />
            </div>
            <div>
              <input type="text" placeholder="Message" />
              <button type="submit">Submit</button>
            </div>
          </form>
          
          <div className="ConnectMainDiv">
              <p>Reach out directly at</p>
              <Link>connect@simplerecipes.com</Link>
            </div>
        </div>
      </div>
    </section>
  );
}
