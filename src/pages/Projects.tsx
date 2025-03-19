import React, { useState,  } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Aboutme.css';
import '../styles/Projects.css';
import Carousel from "react-spring-3d-carousel";
import { slidesData } from "../components/Card"
import { config } from "react-spring";
import { faReact, faHtml5, faCss, faNodeJs, faGithub, faJava,} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function Projects() {

    const [goToSlide, setGoToSlide] = useState<number | undefined>(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = slidesData.map((slide: any, index: any) => {
        return {
          ...slide,
          onClick: () => {
            setGoToSlide(index);
            setCurrentSlide(index);
          }
        };
      });

      // Auto Slide
      // useEffect(() => {
      //   const timer = setInterval(() => {
      //     const nextIndex = (currentSlide + 1) % slidesData.length;
      //     setGoToSlide(nextIndex);
      //     setCurrentSlide(nextIndex);
      //   }, 5500); 
      //   return () => clearInterval(timer);
      // }, [currentSlide]);

      const projectInfo = [
        {
          title: "Maze Escape",
          description: (
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginTop: '10px' }}>
              <div className="neon-box">
                <FontAwesomeIcon icon={faJava} size="2x" color="#61DBFB" />
                <span>Java</span>
              </div>
              <div className="neon-box">
                <FontAwesomeIcon icon={faGithub} size="2x" color="#ffffff" />
                <span>Github</span>
              </div>
            </div>
          )
        },
        {
          title: "WeatherNowWhere",
          description: (
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginTop: '10px' }}>
              <div className="neon-box">
                <FontAwesomeIcon icon={faReact} size="2x" color="#61DBFB" />
                <span>React</span>
              </div>
              <div className="neon-box">
                <FontAwesomeIcon icon={faHtml5} size="2x" color="#ffffff" />
                <span>HTML</span>
              </div>
              <div className="neon-box">
                <FontAwesomeIcon icon={faCss} size="2x" color="#ffffff" />
                <span>CSS</span>
              </div>
              <div className="neon-box">
              <img 
                  src="/icons/JavaScript.png" 
                  alt="Live Site" 
                  style={{ width: '30px', height: '30px' }}
                /> 
                <span>JavaScript</span>
              </div>
            </div>
          )
        },
        {
          title: "CreateYourTodo",
          description: (
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginTop: '10px', alignItems:"center", marginLeft: '50px' }}>
              <div className="neon-box">
                <FontAwesomeIcon icon={faReact} size="2x" color="#61DBFB" />
                <span>React</span>
              </div>
              <div className="neon-box">
                <FontAwesomeIcon icon={faHtml5} size="2x" color="#ffffff" />
                <span>HTML</span>
              </div>
              <div className="neon-box">
                <FontAwesomeIcon icon={faCss} size="2x" color="#ffffff" />
                <span>CSS</span>
              </div>
              <div className="neon-box">
              <img 
                  src="/icons/JavaScript.png" 
                  alt="Live Site" 
                  style={{ width: '30px', height: '30px' }}
                /> 
                <span>JavaScript</span>
              </div>
              <div className="neon-box">
                <FontAwesomeIcon icon={faNodeJs} size="2x" color="#61DBFB" />
                <span>NodeJs</span>
              </div>
              <div className="neon-box">
              <img 
                  src="/icons/icons8-express-js-64.png" 
                  alt="Live Site" 
                  style={{ width: '30px', height: '30px' }}
                /> 
                <span>ExpressJs</span>
              </div>
              <div className="neon-box">
                  <img 
                  src="/icons/icons8-typescript-48.png" 
                  alt="Live Site" 
                  style={{ width: '30px', height: '30px' }}
                /> 
                <span>TypeScipt</span>
              </div>
              <div className="neon-box">
              <img 
                  src="/icons/MongoDB.png" 
                  alt="Live Site" 
                  style={{ width: '30px', height: '30px' }}
                /> 
                <span>MongoDB</span>
              </div>
              
            </div>
          )
        },
        {
          title: "Application Tracker",
          description: (
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginTop: '10px', alignItems:"center", marginLeft: '50px' }}>
              <div className="neon-box">
                <img 
                    src="/icons/icons8-flask-64.png" 
                    alt="Live Site" 
                    style={{ width: '30px', height: '30px' }}
                  /> 
                  <span>Flask</span>
              </div>
              <div className="neon-box">
              <img 
                  src="/icons/Python.png" 
                  alt="Live Site" 
                  style={{ width: '30px', height: '30px' }}
                /> 
                <span>Python</span>
              </div>
              <div className="neon-box">
                <FontAwesomeIcon icon={faHtml5} size="2x" color="#ffffff" />
                <span>HTML</span>
              </div>
              <div className="neon-box">
                <FontAwesomeIcon icon={faCss} size="2x" color="#ffffff" />
                <span>CSS</span>
              </div>
              <div className="neon-box">
              <img 
                  src="/icons/JavaScript.png" 
                  alt="Live Site" 
                  style={{ width: '30px', height: '30px' }}
                /> 
                <span>JavaScript</span>
              </div>
            </div>
          )
        }
      ];
    
      const handlePrev = () => {
        let newIndex = currentSlide - 1;
        if (newIndex < 0) newIndex = slidesData.length - 1;
        setGoToSlide(newIndex);
        setCurrentSlide(newIndex);
      };
    
      const handleNext = () => {
        let newIndex = currentSlide + 1;
        if (newIndex >= slidesData.length) newIndex = 0;
        setGoToSlide(newIndex);
        setCurrentSlide(newIndex);
      };

    return (
        <Container fluid id='projects' className='projects min-vh-100'>
            <Container className="text-center d-flex flex-column align-items-center" style={{paddingTop: '120px'}}>
                <h2 className="display-6 neon-head custom-underline " style={{ letterSpacing: '5px'}}>
                    Works
                </h2>
            </Container>
            <Row className="text-center" style={{ alignItems: 'stretch' , marginTop: '70px', letterSpacing: '3px' }}>
                <Col md={6} className="d-flex flex-column">
                <div className='carousel-container' style={{ position: 'relative',  width: "85%", marginTop: '220px', marginLeft: '100px',}}>
                  <button className="carousel-arrow prev-arrow" onClick={handlePrev}>
                  ❮
                  </button>
                      <Carousel
                      slides={slides}
                      goToSlide={goToSlide}
                      offsetRadius={5}
                      showNavigation={false}
                      animationConfig={config.gentle}
                      />
                  <button className="carousel-arrow next-arrow" onClick={handleNext}>
                    ❯
                  </button>
                </div>
                </Col>
            <Col md={5} className="d-flex flex-column">
            <Container className="description-container" style={{ marginTop: '0px', marginLeft: '60px'}}>
              <div className="title-container">
                <h1 className={`proj-title ${
                    currentSlide === 0 ? "proj-title1" :
                    currentSlide === 1 ? "proj-title2" :
                    currentSlide === 2 ? "proj-title3" :
                    currentSlide === 3 ? "proj-title4" : "proj-title1"
                  }`}>
                  {projectInfo[currentSlide].title}
                </h1>
              </div>
              <div className="des-container">
                <p>
                  {projectInfo[currentSlide].description}
                </p>
              </div>
            </Container>
            </Col>
        </Row>
        </Container>
      );
}