import React from 'react';
import resume from '../Assets/monisha_mekala_resume.jpg';
import resumePdf from '../Assets/Monisha_Mekala_Resume.pdf';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/esm/Image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import '../Styles/resume.css';

function Resume() {
    return (
        <Container>
            <div>
                <Row className='text-center mx-auto'>
                    <Col>
                        <Image src={resume} className='img mx-auto'/>
                    </Col>
                    <Col className='mx-auto'>
                        <Row>
                            <a href={resumePdf} download="Monisha_Mekala_Resume.pdf" className="download-link">
                                <Button className="resume-download-btn mx-auto">
                                    Download
                                </Button>
                            </a>
                        </Row>
                        <Row>
                            <a href={resumePdf} download="Monisha_Mekala_Resume.pdf" className="download-link">
                                <Button className="resume-download-btn mx-auto">
                                    Contact Me!
                                </Button>
                            </a>
                        </Row>
                    </Col>
                </Row>
            </div>
            <div>
                
            </div>
        </Container>
    )
}
export default Resume;