import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProfilePicture from '../Assets/ProfilePicture.jpeg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


import linkedIn from '../Assets/linked-svg.svg';
import email from '../Assets/email-svg.svg';
import github from '../Assets/github-svg.svg';
import python from '../Assets/python.svg';
import golang from '../Assets/golang.svg';
import js from '../Assets/javascript.svg';
import java from '../Assets/java.svg';
import html from '../Assets/html.svg';
import node from '../Assets/node.svg';
import react from '../Assets/react.svg';
import css from '../Assets/css.svg';
import kubernetes from '../Assets/kubernetes.svg';
import docker from '../Assets/docker.svg';
import aws from '../Assets/aws.svg';
import mysql from '../Assets/mysql.svg';
import mongo from '../Assets/mongo.svg';
import website from '../Assets/website-png.png';
import exp from '../Assets/exp.png';
import cert from '../Assets/certifications.png';
import '../Styles/home.css';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {props.org}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className='exp-modal'>
        <h4>{props.role}</h4>
        {props.role === "Graduate Research Assistant" && (
            <div>
                <p>The VREE project is a collaborative initiative between the Department of Computer Science and the School of Engineering, aimed at creating a 3D virtual reality environment to train structural engineering students in post-earthquake damage analysis. This immersive VR training model educates students on identifying structural damage types within a realistic 3D environment.</p>
                <p>My role focuses on advancing the existing desktop-based model to a fully immersive VR experience suitable for head-mounted display devices. Using Unity, .NET, and C#, I’m developing enhanced functionalities to create an engaging training platform that allows users to inspect structural integrity post-earthquake, enabling hands-on learning and improved educational outcomes.</p>
            </div>
        )}
        {props.org === "Associated Students of San Francisco State University" && (
            <div>
                <p>As a part-time Web Developer Intern, I supported the university’s infrastructure by managing AWS services and streamlining deployment processes. This role allowed me to apply and enhance my cloud computing and DevOps skills while working within an Agile team environment.</p>
                <p>Key Responsibilities:
                <br></br>
                Collaborated with cross-functional teams to maintain communication and ensure smooth development and operations workflows.
                <br></br>
                Managed AWS services like EC2, AMI, and Auto-scaling, supporting cloud infrastructure scalability and performance.
                <br></br>
                Assisted in setting up CI/CD pipelines using Jenkins, automating code testing, integration, and deployment processes.
                <br></br>
                Configured AWS RDS for database management, optimizing data storage performance and reliability.
                <br></br>
                This internship provided hands-on experience in cloud infrastructure management, helping me build a strong foundation in DevOps practices and cloud technologies.</p>
            </div>
        )}
        {props.role === "Senior Software Engineer" && (
            <div>
                <p>As a seasoned Senior Quality Assurance Engineer at Larsen & Toubro Infotech, I contributed to the transformative 'Marsh McLennan' project. This initiative focuses on aiding organizations in meeting health, wealth, and career-related requirements through innovative and technology-driven solutions. My role involves not only conducting thorough automation and APIs testing but also gaining proficiency in Java Selenium, C# BDD Specflow, and RestSharp.</p>
                <p>
                Key Achievements and Responsibilities:
                <br></br>
                🔍 Client Collaboration: Collaborating closely with Marsh McLennan, a prominent client in the advisory space, specializing in health, wealth, and career-related solutions through technology-driven strategies.
                <br></br>
                👩‍💻 Testing Expertise: Conducting extensive testing of production bugs and executing automated testing processes to ensure the seamless functionality of critical systems.
                <br></br>
                🛠️ Tool Proficiency: Acquiring proficiency in Java Selenium and C# BDD Specflow, and gaining hands-on experience with project management tools such as JIRA.
                <br></br>
                📚 Training and Skill Enhancement: Underwent a comprehensive one-month training program, focusing on Java and MySQL languages, Java Selenium framework, and project management tools like JIRA.
                <br></br>
                🤝 Team Collaboration: Worked collaboratively in a dynamic team of five members during the training period, contributing to the development of detailed test cases for the flight and hotel booking platform, via.com.
                <br></br>
                I am passionate about leveraging technology to address complex business challenges and keen on continuous learning to stay at the forefront of software engineering.
                </p>
            </div>
        )}
        {props.role === "Full Stack Web Development Intern" && (
            <div>
                <p>Collaborated on an e-commerce website project, using Flask, JavaScript, and SQLite, resulting in a 20% reduction in website loading time and a 30% increase in user engagement metrics.
                </p>
            </div>
        )}
        {props.org === "Code13 Edutech Private Limited" && (
            <div>
                <p>During my internship at Code13 Edutech Private Limited, I led a team of eight members as a Full Stack Developer to create a cutting-edge digital marketing website, significantly elevating the company's online presence. Our team utilized a robust technology stack, including PHP, HTML, CSS, MySQL, and Bootstrap, to develop a user-friendly and visually appealing website. By enhancing the administrative panel with senior developers, we streamlined workflow and user experience, which led to a 15% reduction in development time through analytical skills and problem-solving.
                </p>
                <p>
                Key Contributions:
                <br></br>
                🌐 Digital Marketing Website Development: Spearheaded the creation of a dynamic website, increasing traffic by 25% and streamlining customer engagement.
                <br></br>
                🔧 Technology Stack: Employed PHP, HTML, CSS, MySQL, and Bootstrap to deliver a comprehensive web solution.
                <br></br>
                🤝 Collaboration with Senior Developers: Worked closely with senior developers to upgrade the administration panel using Object-oriented programming (OOP) principles, enhancing capacity to support up to 100 concurrent users and improving overall functionality and efficiency.
                </p>
                <p>
                This experience not only allowed me to apply my technical skills in a real-world setting but also provided valuable insights into collaborative development and project management, preparing me for new challenges in the ever-evolving field of web development.
                </p>
            </div>
        )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [GRA, setGRA] = useState(false);
    const [SSE, setSSE] = useState(false);
    const [WDI, setWDI] = useState(false);
    const [code13, setcode13] = useState(false);
    const [dessert, setDes] = useState(false);

    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        { id: 1, title: "Food Ordering Application" },
        { id: 2, title: "Early Detection of Alzheimer’s Disease with Blood Plasma using Bi-Recurrent Neural Network" },
        { id: 3, title: "Student Records" },
        { id: 4, title: "SFO Passenger Traffic Visualization System" }
    ];

    return (
        <div>
            <Container fluid className="d-flex align-items-center justify-content-center h-100">
                <Row className="text-left to-the-left" id='intro'>
                    <Col sm={8} className="text-white align-self-center">
                        <p className='heading1'>Hey, I'm Monisha.</p>
                        <p className='heading2'>
                        Driven by innovation and versatility in Full-Stack Development, Software Engineering, DevOps, and Machine Learning—ready to tackle complex challenges across the tech landscape.
                        </p>
                        <Row className='text-left buttons-resume-wwm'>
                            <Col>
                                <Button size="lg" href='/myResume'>
                                    Resume
                                </Button>
                            </Col>
                            <Col>
                                <Button size="lg" className='work-with-me' onClick={handleShow}>
                                    Work With Me
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={4}>
                        <Image src={ProfilePicture} thumbnail />
                    </Col>
                </Row>
            </Container>
            <Container id='aboutMe'>
                <Row>
                    <Col sm={4} className='align-self-center'>
                        <Card id='findMe'>
                            <Card.Body>
                                <a href='https://www.linkedin.com/in/monisha-mekala/' className='findMe-links'>
                                    <div className="d-flex align-items-center">
                                        <Card.Link>
                                            <Image src={linkedIn} />
                                        </Card.Link>
                                        <Card.Subtitle className="mb-2 text-muted">monisha-mekala</Card.Subtitle>
                                    </div>
                                </a>
                            </Card.Body>
                        </Card>
                        <Card id='findMe'>
                        <Card.Body>
                            <a className='findMe-links' href='mailto:mvn.monisha@gmail.com'>
                                <div className="d-flex align-items-center">
                                    <Card.Link>
                                        <Image src={email} />
                                    </Card.Link>
                                    <Card.Subtitle className="mb-2 text-muted">mvn.monisha@gmail.com</Card.Subtitle>
                                </div>  
                            </a>
                        </Card.Body>
                        </Card>
                        <Card id='findMe'>
                        <Card.Body>
                            <a href="https://github.com/monishamekala" className='findMe-links'>
                                <div className="d-flex align-items-center">
                                    <Card.Link>
                                        <Image src={github} /> 
                                    </Card.Link>
                                    <Card.Subtitle className="mb-2 text-muted">monishamekala
                                    </Card.Subtitle>
                                </div>
                            </a>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={8}>
                        <p className='heading1' id='getToKnowMe'>
                            Get to know me!
                        </p>
                        <p className='heading2' id='getToKnowMe'>
                        My love for computers started way back in 4th grade with a turtle named LOGO. I remember being totally amazed at how a few commands could make that little turtle draw shapes on the screen! From then on, I was hooked—learning how to "speak" to computers felt like learning magic. Later, in high school, I’d watch my sister, a data engineer, work with scripts and data. She’d patiently explain how data was stored and organized, I would understand bits and parts of it but I found myself wanting to know more. That’s what set me on the path to pursue Bachelor's degree in the field of Information Science and Engineering
                        <p></p>
                        As I dug deeper, I fell in love with creating websites and designing databases, and my curiosity kept growing as new technologies came along. One of my proudest moments was working on a project to detect Alzheimer’s early using machine learning. Watching professors take an interest in our progress was thrilling! After a few internships and work experiences as a Web Developer and Software Engineer, I realized there was still so much to learn. Now, I’m pursuing a Master’s in Computer Science, ready for whatever exciting challenges come next. Learning keeps me inspired, and every new project just makes me want to dive deeper into this ever-evolving world of tech.
                        </p>
                    </Col>
                </Row>
            </Container>
            <div fluid className='three-achv' id='three-achv'>
                    <Row className='text-center' >
                        <Col>
                            <Image src={website} className="img-achv-icons" />
                            <p className="normal-content">Built Over 3 Websites</p>
                        </Col>
                        <Col>
                            <Image src={exp} className="img-achv-icons" />
                            <p className="normal-content">2+ Years of Experience</p>
                        </Col>
                        <Col>
                            <Image src={cert} className="img-achv-icons" />
                            <p className="normal-content">Amazon Web Services Certified</p>
                        </Col>
                    </Row>
            </div>
            <Container fluid id='skills' className='to-the-left'>
                <Row>
                    <p className='heading1' id='skillsheading1'>
                        <span className="featured-text">Featured</span> <span className="skills-text">Skills</span>
                    </p>
                </Row>
                <Row xs="auto" className='contact-row align-items-center justify-content-center h-100' id='fs'>
                    <Col>
                        <Image src={python} />
                    </Col>
                    <Col>
                        <Image src={golang} />
                    </Col>
                    <Col>
                        <Image src={js} />
                    </Col>
                    <Col>
                        <Image src={java} />
                    </Col>
                    <Col>
                        <Image src={html} />
                    </Col>
                    <Col>
                        <Image src={css} />
                    </Col>
                    <Col>
                        <Image src={node} />
                    </Col>
                    <Col>
                        <Image src={react} />
                    </Col>
                    <Col>
                        <Image src={mysql} />
                    </Col>
                    <Col>
                        <Image src={mongo} />
                    </Col>
                </Row>
                <Row xs="auto" className='contact-row align-items-center justify-content-center h-100' id='cloud'>
                    <Col>
                        <Image src={kubernetes} />
                    </Col>
                    <Col>
                        <Image src={docker} />
                    </Col>
                    <Col>
                        <Image src={aws} />
                    </Col>
                </Row>
                <Row>
                    <p className='heading1' id='skillsheading1'>
                        <span className="featured-text2">All</span> <span className="skills-text">Skills</span>
                    </p>
                </Row>
                <Row className='contact-row' id='allskills'>
                    <Col sm>
                        <p>
                            <span>Languages & Frameworks: </span>
                            C++, C#, Python, Java, Go, Flask, Express, Bootstrap, Spring Boot, NumPy, Matplotlib</p>
                        <p>
                            <span>Web Technologies: </span>
                            HTML5, CSS3, PHP, JavaScript, Node.js, React.js, REST, AngularJS, Ajax, API, Express.js</p>
                        <p>
                            <span>DevOps Tools: </span>
                            Git, Kubernetes, Docker, Jenkins (CI/CD), Ansible, Nginx, Selenium, JUnit</p>
                        <p>
                            <span>Database: </span>
                            MySQL, NoSQL, MongoDB, PostgreSQL, PL/SQL, Cassandra, DynamoDB</p>
                        <p>
                            <span>Cloud Platforms and Tools: </span>
                            AWS EC2, Azure, GCP, JIRA, Visual Studio, Eclipse, Spyder, MATLAB, Ubuntu</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid id='experience' className='to-the-left'>
                <Row>
                    <p className='heading1 text-center' id='exp-heading'>
                        Experience 
                    </p>
                </Row>
                <Row className="justify-content-md-center exp-rows">
                    <Col sm className='exp-cells'>
                        <h3>
                            Graduate Research Assistant
                        </h3>
                        <p>
                            San Francisco State University
                            <br></br>
                            June 2024 - Present
                            <br></br>
                        </p>
                        <Button onClick={() => setGRA(true)}>My Role</Button>
                    </Col>
                    <Col sm className='exp-cells'>
                        <h3>
                            Web Development Intern
                        </h3>
                        <p>
                            Associated Students of San Francisco State University
                            <br></br>
                            December 2023 - Present
                        </p>
                        <Button onClick={() => setWDI(true)}>My Role</Button>
                    </Col>
                    <Col sm className='exp-cells'>
                        <h3>
                            Senior Software Engineer
                        </h3>
                        <p>
                            Larsen & Tubro InfoTech
                            <br></br>
                            July 2022 - August 2023
                        </p>
                        <Button onClick={() => setSSE(true)}>My Role</Button>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col sm className='exp-cells'>
                        <h3>
                            Full Stack Web Development Intern
                        </h3>
                        <p>
                            Smart Dessert Academy
                            <br></br>
                            September 2021 - October 2021
                        </p>
                        <Button onClick={() => setDes(true)}>My Role</Button>
                    </Col>
                    <Col sm className='exp-cells'>
                        <h3>
                            Web Development Intern
                        </h3>
                        <p>
                            Code13 Edutech Private Limited
                            <br></br>
                            April 2021 - June 2021
                        </p>
                        <Button onClick={() => setcode13(true)}>My Role</Button>
                    </Col>
                </Row>
            </Container>
            <Container fluid id='projects' className='to-the-left'>
                <Row>
                    <p className='heading1' id='project-heading'>
                        Projects 
                    </p>
                </Row>
                <Row>
                    {/* Left Column for Project Titles */}
                    <Col sm={4}>
                        {projects.map((project) => (
                            <div 
                                key={project.id} 
                                className={`project-title ${hoveredProject === project.id ? 'expanded' : ''}`}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                {project.title}
                            </div>
                        ))}
                    </Col>

                    {/* Right Column for Project Descriptions */}
                    <Col sm={8} className="project-description">
                        {hoveredProject === 1 && (
                            <div>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                                </p>
                            </div>
                        )}
                        {hoveredProject === 2 && (
                            <div>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                                </p>
                            </div>
                        )}
                        {hoveredProject === 3 && (
                            <div>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                                </p>
                            </div>
                        )}
                        {hoveredProject === 4 && (
                            <div>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                                </p>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
            <Container fluid id='certifications' className='to-the-left'>
                <Row>
                    <p className='heading1'>
                        Certifications 
                    </p>
                </Row>
            </Container>
            <Container fluid id='myResume' className='to-the-left'>
                <Row>
                    <p className='heading1' id='exp-heading'>
                        Resume 
                    </p>
                </Row>
            </Container>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                <Modal.Title>Let's Work Together</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type='text' required/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type='email' required/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Message
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control as="textarea" rows={3} />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button className='modalButtons' onClick={handleClose}>
                    Close
                </Button>
                <Button className='modalButtons' onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

            <MyVerticallyCenteredModal
                show={GRA}
                org = 'San Francisco State University'
                role = 'Graduate Research Assistant'
                onHide={() => setGRA(false)}
            />

            <MyVerticallyCenteredModal
                show={WDI}
                org = 'Associated Students of San Francisco State University'
                role = 'Web Development Intern'
                onHide={() => setWDI(false)}
            />

            <MyVerticallyCenteredModal
                show={SSE}
                role = 'Senior Software Engineer'
                org = 'Larsen & Toubro InfoTech'
                onHide={() => setSSE(false)}
            />

            <MyVerticallyCenteredModal
                show={dessert}
                role = 'Full Stack Web Development Intern'
                org = 'Smart Dessert Academy'
                onHide={() => setDes(false)}
            />

            <MyVerticallyCenteredModal
                show={code13}
                role = 'Web Development Intern'
                org = 'Code13 Edutech Private Limited'
                onHide={() => setcode13(false)}
            />
        </div>
    );
}

export default Home;
