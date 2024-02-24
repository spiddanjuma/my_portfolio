import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import html from "../assets/img/icons8-html-240.svg";
import css from "../assets/img/icons8-css.svg";
import js from "../assets/img/icons8-javascript.svg";
import bt from "../assets/img/icons8-bootstrap.svg";
import rt from "../assets/img/icons8-react-480.svg";
import tail from "../assets/img/icons8-tailwind-css.svg";
import node from "../assets/img/icons8-node-js.svg";
import python from "../assets/img/icons8-python.svg";
import db from "../assets/img/mongodb.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Below are the list of my Programming Stack.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h5>JAVASCRIPT</h5>
                            </div>
                            <div className="item">
                                <img src={bt} alt="Image" />
                                <h5>BOOTSTRAP</h5>
                            </div>
                            <div className="item">
                                <img src={tail} alt="Image" />
                                <h5>TAILWIND</h5>
                            </div>
                            <div className="item">
                                <img src={rt} alt="Image" />
                                <h5>REACT</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>NODE.JS</h5>
                            </div>
                            <div className="item">
                                <img src={db} alt="Image" />
                                <h5>MONGODB</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>PYTHON</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
