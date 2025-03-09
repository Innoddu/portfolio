
import { Container, Button } from 'react-bootstrap';
import '../styles/Home.css';

export function Home() {
    return (
        <Container fluid id="home" className="home min-vh-100" style={{ paddingTop: '80px'}}>
            <Container className="text-center w-50 d-flex flex-column align-items-center" style={{paddingTop: '100px'}}>
                <h1 className="display-4 neon-text">HEY, I'M INHO CHOI</h1>
                <p className=" neon-paragraph fs-5" style={{ lineHeight: '2.0', marginTop: '30px' }}>
                As a Software Engineer, I love creating something with code. <br />
                Especially, I'm focusing on developing web and mobile application. <br />
                I'm so excited to write code that creates what someone needs or even what I need. <br />
                </p>
                <Button
                href="/Inho_Choi_Resume.pdf"
                target="_blank"
                className="custom-resume-btn mt-5"
                >
                Resume
                </Button>
                <div className="scroll-indicator">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                </div>

            </Container>
        </Container>
     
    );
}