
import "./mainblog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import {faEye} from '@fortawesome/free-regular-svg-icons'
import Blog1 from "../../assets/images/EssentialBlog.png";
import Blog4 from "../../assets/images/BakingBlog.png";
import Blog3 from '../../assets/images/MistakeBlog.jpeg'
import Blog2 from '../../assets/images/HealthyBlog.png'
import Blog5 from '../../assets/images/coupleDinnerBlog.jpeg'
import Blog6 from '../../assets/images/glomourBlog.png'


export function MainBlog() {


  return (
    <section className="MainBlogMainSec">
      <div className="MainBlogMainDiv">
        <div className="WelcomingBlogMainDiv">
          <div className="WelcomingPOnlyDiv">
            <p>Welcome to our blog</p>
          </div>
          <div className="WelcomeMorePDiv">
            <p>Discover expert advice, whether you’re a <br/>beginner or seasoned cook, our blog will<br/> inspire your next delicious dish.</p>
          </div>
        </div>
           
        
        <div className="BlogDispalyDiv">
          <div className="EachBlog1 AllBlogPosts">
            <div className="ImageWrapperEachBlog">
              <img src={Blog1} id="BlogEachPic" />
            </div>

            <p id="BlogLittleTittle">5 Simple Ingredients to Elevate Any Dish</p>
            <p id="BlogDescription">
              Discover how to take your meals from basic to gourmet with just
              five key ingredients.
            </p>
            <div className="ButtonDateDiv">
              <button>Read {""}{""} <FontAwesomeIcon icon={faEye} /></button>
              <div className="DotDateDiv">
              <FontAwesomeIcon icon={faCircle} id="BlogCircles"/>
              <p>12 Sept 2024</p>
              </div>
            </div>
          </div>
          <div className="EachBlog2 AllBlogPosts">
            <div className="ImageWrapperEachBlog">
              <img src={Blog2} id="BlogEachPic" />
            </div>
            <p id="BlogLittleTittle">Quick and Healthy Weeknight Meals for Busy Families</p>
            <p id="BlogDescription">
              Easy, nutritious dinners that you can prepare in under 30 minutes,
              perfect for hectic schedules.
            </p>
            <div className="ButtonDateDiv">
              <button>Read {""}{""} <FontAwesomeIcon icon={faEye} /></button>
              <div className="DotDateDiv">
              <FontAwesomeIcon icon={faCircle} id="BlogCircles"/>
              <p>12 Aug 2024</p>
              </div>
            </div>
          </div>
          <div className="EachBlog3 AllBlogPosts">
            <div className="ImageWrapperEachBlog">
              <img src={Blog3} id="BlogEachPic" />
            </div>
            <p id="BlogLittleTittle">10 Cooking Mistakes You Didn’t Know You Were Making</p>
            <p id="BlogDescription">
              Avoid these common kitchen blunders and improve your cooking
              instantly.
            </p>
            <div className="ButtonDateDiv">
              <button>Read {""}{""} <FontAwesomeIcon icon={faEye} /></button>
              <div className="DotDateDiv">
              <FontAwesomeIcon icon={faCircle} id="BlogCircles"/>
              <p>22 July 2024</p>
              </div>
            </div>
          </div>
          <div className="EachBlog4 AllBlogPosts">
            <div className="ImageWrapperEachBlog">
              <img src={Blog4} id="BlogEachPic" />
            </div>
            <p id="BlogLittleTittle">The Best Baking Tips for Flawless Cakes and Pastries</p>
            <p id="BlogDescription">Elevate your baking skills with our foolproof tips for perfect cakes and pastries
            </p>
            <div className="ButtonDateDiv">
              <button>Read {""}{""} <FontAwesomeIcon icon={faEye} /></button>
              <div className="DotDateDiv">
              <FontAwesomeIcon icon={faCircle} id="BlogCircles"/>
              <p>10 July 2024</p>
              </div>
            </div>
          </div>
          <div className="EachBlog5 AllBlogPosts">
            <div className="ImageWrapperEachBlog">
              <img src={Blog5} id="BlogEachPic" />
            </div>
            <p id="BlogLittleTittle">Cooking for Two: Romantic Dinner Recipes</p>
            <p id="BlogDescription">
            Perfect meal ideas for a cozy, romantic night in with your partner.
            </p>
            <div className="ButtonDateDiv">
              <button>Read {""}{""} <FontAwesomeIcon icon={faEye} /></button>
              <div className="DotDateDiv">
              <FontAwesomeIcon icon={faCircle} id="BlogCircles"/>
              <p>19 Jan 2024</p>
              </div>
            </div>
          </div>
          <div className="EachBlog6 AllBlogPosts">
            <div className="ImageWrapperEachBlog">
              <img src={Blog6} id="BlogEachPic" />
            </div>
            <p id="BlogLittleTittle">How to Create Gourmet Meals on a Budget</p>
            <p id="BlogDescription">
            Learn how to make gourmet meals at home without breaking the bank.
            </p>
            <div className="ButtonDateDiv">
              <button>Read {""}{""} <FontAwesomeIcon icon={faEye} /></button>
              <div className="DotDateDiv">
              <FontAwesomeIcon icon={faCircle} id="BlogCircles"/>
              <p>13 Dec 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
