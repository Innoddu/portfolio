import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Aboutme.css';
import '../styles/Projects.css';
import Carousel from "react-spring-3d-carousel";
import { slidesData } from "../components/Card"
import { config } from "react-spring";

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

      const projectInfo = [
        {
          title: "Maze Escape",
          description: "Slide 1 프로젝트 설명..."
        },
        {
          title: "WeatherNowWhere",
          description: "Slide 2 프로젝트 설명..."
        },
        {
          title: "Slide 3",
          description: "Slide 3 프로젝트 설명..."
        },
        {
          title: "Slide 4",
          description: "Slide 4 프로젝트 설명..."
        }
      ];
    


    return (
        <Container fluid id='projects' className=' min-vh-100'>
            <Container className="text-center d-flex flex-column align-items-center" style={{paddingTop: '120px'}}>
                <h2 className="display-6 neon-head custom-underline " style={{ letterSpacing: '5px'}}>
                    Works
                </h2>
            </Container>
            <Row className="text-center" style={{ marginTop: '30px', letterSpacing: '3px' }}>
                <Col md={6}>
                <div style={{ width: "80%", marginTop: '250px', marginLeft: '150px' }}>
                    <Carousel
                    slides={slides}
                    goToSlide={goToSlide}
                    offsetRadius={5}
                    showNavigation={false}
                    animationConfig={config.gentle}
                    />
                </div>
                <div className="imac-stand"></div>
                </Col>
            <Col md={5}>
                <Container className="proj-description">
                <h3 className="proj-title">{projectInfo[currentSlide].title}</h3>
                <p>
                    {projectInfo[currentSlide].description}
                </p>
                </Container>
            </Col>
        </Row>
        </Container>
      );
}