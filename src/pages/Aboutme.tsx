import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Aboutme.css';
import cal_logo from "../assets/logos/Cal_logo-Photoroom.png";
import smc_logo from "../assets/logos/SMClogoRxblue10-Photoroom.png";

export function Aboutme() {
    return (
        <Container fluid id="aboutme" className="min-vh-100" >
            <Container className="text-center d-flex flex-column align-items-center" style={{paddingTop: '120px'}}>
                <h2 className="display-6 neon-head custom-underline " style={{ letterSpacing: '5px'}}>
                    About Me
                </h2>
                <p className="aboutme-paragraph" style={{ letterSpacing: '4px', lineHeight: '1.5'}}>
                    Here you can find my background, what I studied during my school 
                    and what do I have skills as a Software Engineer.
                </p>
            </Container>
                 {/* Education */}
                <Container className="education-container d-flex flex-column align-items-center">
                    <h3 className='neon-head'  style={{ letterSpacing: '4px'}}>
                    ❝ Education ❞
                    </h3>

                    <div className='edu-sub-container text-center' style={{ letterSpacing: '3px'}}>
                    <div className="smc-container ">
                    <p> 2020 - 2022 </p>
                    <div className='logo-container'>
                        <img
                        src={smc_logo}
                        alt="smc_logo"
                        width="85"  
                        height="110"
                        className="d-inline-block align-top"
                        />
                    </div>
                         <div className="text-center">
                            <p>Santa Monica College</p>
                            <p style={{ fontSize: '12px', color: "wheat", marginTop: "6px" }}>
                                Engineering
                            </p>
                        </div>
                        <div className="smc-paragraph">
                        <p> When I was in college, I focused on searching for what I like and what I am doing good at.
                        </p>
                        </div>
                    </div>
                    <div className="ucb-container">
                    <p> 2022 - 2024 </p>
                    <div className='logo-container'>                        
                        <img
                        src={cal_logo}
                        alt="cal_logo"
                        width="70"  
                        height="60"
                        className="d-inline-block align-top"
                        />
                    </div>
                         <div className="text-center">
                            <p>University of California Berkeley</p>
                            <p style={{ fontSize: '12px', color: "wheat", marginTop: "6px" }}>
                                Data Science
                            </p>
                        </div>
                        <div className="ucb-paragraph">
                        <p> During my time at UC Berkeley, I was passionate about my major 
                            because it challenged me to think both critically and creatively.
                        </p>
                        </div>
                    </div>
                    </div>
                </Container>
                {/* skills */}
                <Container className="skills-container d-flex flex-column align-items-center"  style={{paddingTop: '120px'}}>
                    <h3 className='neon-head'  style={{ letterSpacing: '4px'}}>
                    ❝ Skills ❞
                    </h3>
                    <Row className="text-center" style={{ marginTop: '50px', letterSpacing: '3px' }}>
                        <Col md={6} >
                        <h4 className='cs-head-neon'> Computer Science</h4>
                        <div className="cs-bubbles">
                            <span className="cs-skill-bubble">React</span>
                            <span className="cs-skill-bubble">ReactNative</span>
                            <span className="cs-skill-bubble">HTML</span>
                            <span className="cs-skill-bubble">CSS</span>
                            <span className="cs-skill-bubble">JavaScript</span>
                            <span className="cs-skill-bubble">TypeScript</span>
                            <span className="cs-skill-bubble">Python</span>
                            <span className="cs-skill-bubble">MongoDB</span>
                            <span className="cs-skill-bubble">Java</span>
                            <span className="cs-skill-bubble">Node.js</span>
                            <span className="cs-skill-bubble">Express.js</span>
                            <span className="cs-skill-bubble">AWS EC2</span>
                        </div>
                        </Col>
                        <Col md={6}>
                        <h4 className='ds-head-neon'> Data Science</h4>
                        <div className="ds-bubbles">
                            <span className="ds-skill-bubble">NumPy</span>
                            <span className="ds-skill-bubble">Pandas</span>
                            <span className="ds-skill-bubble">SQL</span>
                            <span className="ds-skill-bubble">Scikit-learn</span>
                            <span className="ds-skill-bubble">TensorFlow</span>
                            <span className="ds-skill-bubble">PyTorch</span>
                            <span className="ds-skill-bubble">Matplotlib</span>
                            <span className="ds-skill-bubble">PowerBI</span>
                        </div>
                        </Col>
                    </Row>
                </Container>
        </Container>
      );
}