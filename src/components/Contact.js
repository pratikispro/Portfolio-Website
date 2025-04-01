import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Lottie from 'react-lottie';
import animationData from '../assets/lottie/contact me.json'; 
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaUniversity } from 'react-icons/fa';

export const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <Lottie options={defaultOptions} height={400} width={400} />
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contact Me</h2>
                  <div className="contact-info">
                    <div className="contact-item">
                      <FaEnvelope className="contact-icon" />
                      <span>pratiksarkarofficial004@gmail.com</span>
                    </div>
                    <div className="contact-item">
                      <FaPhone className="contact-icon" />
                      <span>Phone: +91 12345 67890</span>
                    </div>
                    <div className="contact-item">
                      <FaLinkedin className="contact-icon" />
                      <a href="https://www.linkedin.com/in/pratiksarkar4/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                    </div>
                    <div className="contact-item">
                      <FaGithub className="contact-icon" />
                      <a href="https://github.com/pratikispro" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </div>
                    <div className="contact-item education">
                      <FaUniversity className="contact-icon" />
                      <span>KIIT University, Btech - Computer Science</span>
                    </div>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
