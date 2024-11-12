import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProfilePicture from '../Assets/ProfilePicture.jpeg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import linkedIn from '../Assets/linked-svg.svg';
import email from '../Assets/email-svg.svg';
import github from '../Assets/github-svg.svg';
import '../Styles/home.css';

function Home() {
    return (
        <div>
            <Container fluid className="d-flex align-items-center justify-content-center h-100">
                <Row className="text-left to-the-left">
                    <Col sm={8} className="text-white align-self-center">
                        <p className='heading1'>Hey, I'm Monisha.</p>
                        <p className='heading2'>
                        Driven by innovation and versatility in Software Engineering, DevOps, and Machine Learning—ready to tackle complex challenges across the tech landscape.
                        </p>
                        <Row className='text-left buttons-resume-wwm'>
                            <Col>
                                <Button size="lg" href='/myResume'>
                                    Resume
                                </Button>
                            </Col>
                            <Col>
                                <Button size="lg" className='work-with-me'>Work With Me</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={4}>
                        <Image src={ProfilePicture} thumbnail />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <p className='heading1'>
                        Get to know me!
                    </p>
                    <p className='heading2'>
                    My love for computers started way back in 4th grade with a turtle named LOGO. I remember being totally amazed at how a few commands could make that little turtle draw shapes on the screen! From then on, I was hooked—learning how to "speak" to computers felt like learning magic. Later, in high school, I’d watch my sister, a data engineer, work with scripts and data. She’d patiently explain how data was stored and organized, I would understand bits and parts of it but I found myself wanting to know more. That’s what set me on the path to pursue Bachelor's degree in the field of Information Science and Engineering
                    </p>

                    <p className='heading2'>
                    As I dug deeper, I fell in love with creating websites and designing databases, and my curiosity kept growing as new technologies came along. One of my proudest moments was working on a project to detect Alzheimer’s early using machine learning. Watching professors take an interest in our progress was thrilling! After a few internships and work experiences as a Web Developer and Software Engineer, I realized there was still so much to learn. Now, I’m pursuing a Master’s in Computer Science, ready for whatever exciting challenges come next. Learning keeps me inspired, and every new project just makes me want to dive deeper into this ever-evolving world of tech.
                    </p>
                </Row>
            </Container>
            <Container>
                <p className='heading1'>
                    You can find me here...
                </p>
                <Row xs="auto" className='contact-row'>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>LinkedIn</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">monisha-mekala</Card.Subtitle>
                            <Card.Link href="https://www.linkedin.com/in/monisha-mekala/">
                                <Image src={linkedIn} />
                            </Card.Link>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Mail</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">mvn.monisha@gmail.com</Card.Subtitle>
                            <Card.Link href="mailto:mvn.monisha@gmail.com">
                                <Image src={email} />
                            </Card.Link>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Github</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">monishamekala</Card.Subtitle>
                            <Card.Link href="https://github.com/monishamekala">
                                <Image src={github} />
                            </Card.Link>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
