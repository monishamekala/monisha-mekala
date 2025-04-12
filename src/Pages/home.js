import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProfilePicture from '../Assets/ProfilePicture.jpeg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
import postgres from '../Assets/postgres.svg';
import mongo from '../Assets/mongo.svg';
import website from '../Assets/website-png.png';
import exp from '../Assets/exp.png';
import cert from '../Assets/certifications.png';
import pc1 from '../Assets/pc1.png';
import pc2 from '../Assets/pc2.png';
import pc3 from '../Assets/pc3.png';

import sfState from '../Assets/sfState.jpeg';
import dsi from '../Assets/dsi.jpeg';

import sfo1 from '../Assets/sfo1.jpeg';
import sfo2 from '../Assets/sfo2.jpeg';
import sfo3 from '../Assets/sfo3.jpeg';
import sfo4 from '../Assets/sfo4.jpeg';

import awscertification from '../Assets/awsBadge.png';
import ckad from '../Assets/ckad.png';

import pcInfo from '../Assets/Monisha Mekala Pizza Craze Project.pdf';
import plus from '../Assets/plus.svg';
import minus from '../Assets/minus.svg';

import aHoliday from '../Assets/aHoliday.png';
import aHoliday1 from '../Assets/aHoliday1.png';

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
        {/* {props.role === "Graduate Research Assistant" && (
            <div>
                <p>The VREE project is a collaborative initiative between the Department of Computer Science and the School of Engineering, aimed at <span className='highlight-text'>creating a 3D virtual reality environment</span> to train structural engineering students in post-earthquake damage analysis. This immersive VR training model educates students on identifying structural damage types within a realistic 3D environment.</p>
                <p>My role focuses on advancing the existing desktop-based model to a fully immersive VR experience suitable for head-mounted display devices. <span className='highlight-text'>Using Unity, .NET, and C#</span>, I’m developing enhanced functionalities to create an engaging training platform that allows users to inspect structural integrity post-earthquake, enabling hands-on learning and improved educational outcomes.</p>
            </div>
        )} */}
        {props.role === "Backend Developer" && (
            <div>
                <p>
                    As a <span className='highlight-text'>Backend Developer</span> at Associated Students, San Francisco State University, I am responsible for designing and optimizing cloud infrastructure to ensure high availability, scalability, and efficiency. This role requires a balance of technical expertise and strategic problem-solving to maintain system resilience while optimizing resource utilization.
                </p>
                <p>
                    <strong>Key Achievements and Responsibilities:</strong>
                    <br></br>
                    <strong>Cloud Infrastructure Architecture:</strong> Designed and implemented a robust cloud infrastructure, improving system resilience and enabling the platform to handle 20 percent more traffic while maintaining 99 percent uptime.
                    <br></br>
                    <strong>Scalability and Load Balancing:</strong> Automated load balancing across <span className='highlight-text'>AWS EC2 instances</span>, ensuring the platform could efficiently scale to meet increased traffic demands.
                    <br></br>
                    <strong>Microservices Deployment:</strong> Orchestrated service deployments with <span className='highlight-text'>Kubernetes</span>, enhancing service communication and increasing fault tolerance by 30 percent.
                    <br></br>
                    <strong>Cost Optimization:</strong> Leveraged Kubernetes Horizontal Pod Autoscaler (HPA) to dynamically adjust resource allocation, improving efficiency and reducing infrastructure costs by 20 percent.
                    <br></br>
                    <strong>CI/CD Automation:</strong> Streamlined CI/CD pipelines by automating rollbacks and log troubleshooting, cutting deployment time by eight hours and improving release stability.
                    <br></br>
                    <strong>Cross-functional Collaboration:</strong> Worked closely with team leads and stakeholders to align infrastructure strategies with business needs, ensuring seamless system operation within budget constraints.
                    <br></br>
                    This role has strengthened my ability to develop scalable cloud solutions, optimize DevOps processes, and collaborate effectively within a fast-paced environment. By integrating technical solutions with business objectives, I continue to enhance infrastructure performance while fostering innovation and efficiency.
                </p>
            </div>
        )}

        {props.role === "Senior Software Engineer" && (
            <div>
                <p>
                    As a dedicated <span className='highlight-text'>Senior Software Engineer</span> at LTIMindtree, I played a pivotal role in modernizing backend systems and optimizing performance for high-scale enterprise applications. My work involved collaborating with cross-functional teams to develop robust, scalable solutions while improving automation and deployment processes.
                </p>
                <p>
                    <strong>Key Achievements and Responsibilities:</strong>
                    <br></br>
                    <strong>Legacy Modernization:</strong> Led the migration of legacy scripts to a Spring Boot-based application, enhancing browser compatibility and achieving a sixfold improvement in execution speed.
                    <br></br>
                    <strong>Performance Optimization:</strong> Improved search efficiency by implementing asynchronous processing with <span className='highlight-text'>Kafka and Redis</span>, reducing retrieval times from eight seconds to two seconds.
                    <br></br>
                    <strong>API Development:</strong> Developed reusable REST APIs to standardize service integration, cutting development time by 30 hours per release.
                    <br></br>
                    <strong>Test Automation and CI/CD:</strong> Automated integration testing on <span className='highlight-text'>Azure pipelines</span>, enhancing Agile workflows, streamlining deployments, and improving failure diagnostics.
                    <br></br>
                    <strong>Agile Project Execution:</strong> Maintained a sprint velocity of 30, exceeding milestones by 24 percent, ensuring timely delivery of high-quality features.
                    <br></br>
                    <strong>Innovation with Proof of Concept:</strong> Piloted a Proof of Concept (PoC) for the <span className='highlight-text'>ACTs tool</span>, streamlining test automation, reducing manual testing efforts by 40 percent, and improving test coverage by 30 percent.
                    <br></br>
                    <strong>Collaboration and Leadership:</strong> Engaged in technical discussions with leads and stakeholders, ensuring solutions aligned with business objectives and budget constraints.
                    <br></br>
                    This role has strengthened my ability to integrate technical expertise with strategic thinking, ensuring high-performance software solutions while fostering teamwork, innovation, and efficiency.
                </p>
            </div>
        )}
        {props.role === "Full Stack Web Development Intern" && (
            <div>
                <p>Collaborated on an e-commerce website project, using Flask, JavaScript, and SQLite, resulting in a 20% reduction in website loading time and a <span className='highlight-text'>30% increase in user engagement metrics.</span>
                </p>
            </div>
        )}
        {props.role === "Web Development Intern" && (
            <div>
                <p>
                    As a <span className='highlight-text'>Full-Stack Developer</span>, I engineered scalable and high-performance web applications, optimizing both frontend and backend architectures for efficiency and accessibility. This role required a strategic approach to software development, balancing technical implementation with user experience and system reliability.
                </p>
                <p>
                    <strong>Key Achievements and Responsibilities:</strong>
                    <br></br>
                    <strong>Performance Optimization:</strong> Implemented code splitting and server-side rendering (SSR) to reduce first-load latency by 50 percent, improving page load speed and overall user experience.
                    <br></br>
                    <strong>Accessible and Optimized UI/UX:</strong> Designed interactive web interfaces, optimizing virtual DOM updates and asset preloading to enhance accessibility and ensure <span className='highlight-text'>WCAG compliance</span> for disabled users.
                    <br></br>
                    <strong>Efficient Data Management:</strong> Optimized data feeds using <span className='highlight-text'>RESTful and GraphQL APIs</span>, improving retrieval speed by 30 percent and enabling offline access with background synchronization.
                    <br></br>
                    <strong>Scalable Backend Architecture:</strong> Developed large-scale backend services, implementing pagination and <span className='highlight-text'>PgBouncer</span> to improve system reliability and reduce query latency by 40 percent.
                    <br></br>
                    <strong>Object-Oriented Programming (OOP):</strong> Applied OOP principles to enhance code modularity and scalability, ensuring efficient development and maintainability in building <span className='highlight-text'>CodaKaroYaroo</span>.
                    <br></br>
                    <strong>Cross-Functional Collaboration:</strong> Worked closely with frontend and backend teams to align performance strategies with business needs, ensuring seamless integration and system stability.
                    <br></br>
                    This role strengthened my ability to develop optimized full-stack applications, implement performance-driven solutions, and contribute to a seamless user experience while maintaining scalability and maintainability in large-scale systems.
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

    const [GRA, setGRA] = useState(false);
    const [SSE, setSSE] = useState(false);
    const [WDI, setWDI] = useState(false);
    const [code13, setcode13] = useState(false);
    const [dessert, setDes] = useState(false);

    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        { id: 1, title: "3D Virtual Reality Environment for Training Civil Engineering Students", description: "Description of VREE Project." },
        { id: 2, title: "Student Dropout & Academic Success Prediction", description: "Description of Student Dropout & Academic Success Prediction Project." },
        { id: 3, title: "Food Ordering Application", description: "Description of Food Ordering Application." },
        { id: 4, title: "SFO Passenger Traffic Visualization System", description: "Description of SFO Passenger Traffic Visualization System." },
        { id: 5, title: "Early Detection of Alzheimer’s Disease with Blood Plasma using Bi-Recurrent Neural Network", description: "Description of Alzheimer’s Disease Detection Project." }
    ];

    const toggleProject = (id) => {
        setSelectedProject(selectedProject === id ? null : id);
    };

    return (
        <div>
            <Container fluid className="d-flex align-items-center justify-content-center h-100">
                <Row className="text-left to-the-left" id='intro'>
                    <Col sm={8} className="text-white align-self-center">
                        <p className='heading1'>Hey, I'm Monisha.</p>
                        <p className='heading2'>
                        Driven by innovation and versatility in Backend Development, Cloud & Distributed Systems, DevOps/MLOps, Site Reliability, Software Engineering and Machine Learning—ready to tackle complex challenges across the tech landscape.
                        </p>
                        <Row className='text-left buttons-resume-wwm'>
                            <Col sm>
                                <Button size="lg" className='work-with-me' href='https://www.linkedin.com/in/monisha-mekala/' target="_blank" rel="noopener noreferrer">
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
                                <a href='https://www.linkedin.com/in/monisha-mekala/' className='findMe-links' target="_blank" rel="noopener noreferrer">
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
                            <a className='findMe-links' href='mailto:mvn.monisha@gmail.com' target="_blank" rel="noopener noreferrer">
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
                            <a href="https://github.com/monishamekala" className='findMe-links' target="_blank" rel="noopener noreferrer">
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
                        My love for computers started way back in 4th grade with a turtle named LOGO. I remember being totally amazed at how a few commands could make that little turtle draw shapes on the screen! From then on, I was hooked—learning how to "speak" to computers felt like learning magic. Later, in high school, I’d watch my sister, a data engineer, work with scripts and data. She’d patiently explain how data was stored and organized, I would understand bits and pieces of it but I found myself wanting to know more. That’s what set me on the path to pursue Bachelor's degree in the field of Information Science and Engineering
                        <p></p>
                        As I dug deeper, I fell in love with creating websites and designing databases, and my curiosity kept growing as new technologies came along. One of my proudest moments was working on a project to detect Alzheimer’s early using machine learning. Watching professors take an interest in our progress was thrilling! After a few internships and work experiences as a Web Developer and Software Engineer, I realized there was still so much to learn. Now, I’m pursuing a Master’s in Computer Science, ready for whatever exciting challenges come next. Learning keeps me inspired, and every new project just makes me want to dive deeper into this ever-evolving world of tech.
                        </p>
                    </Col>
                </Row>
            </Container>
            <div fluid className='three-achv' id='three-achv'>
                    <Row className='text-center' >
                        <Col sm>
                            <Image src={website} className="img-achv-icons" />
                            <p className="normal-content">Built Over 3 Websites</p>
                        </Col>
                        <Col sm>
                            <Image src={exp} className="img-achv-icons" />
                            <p className="normal-content">2+ Years of Experience</p>
                        </Col>
                        <Col sm>
                            <Image src={cert} className="img-achv-icons" />
                            <p className="normal-content">Amazon Web Services Certified</p>
                        </Col>
                    </Row>
            </div>
            <Container fluid id='skills' className='to-the-left'>
                <Row>
                    <p className='heading1 text-center skills-text' id='exp-heading'>
                        SKILLS 
                    </p>
                </Row>
                <Row className="justify-content-md-center exp-rows">
                    <Row xs="auto" className='justify-content-md-center' id='fs'>
                                <Col className="text-center">
                                    <Image src={python} />
                                </Col>
                                <Col className="text-center">
                                    <Image src={golang} />
                                </Col>
                                <Col className="text-center">
                                    <Image src={js} />
                                </Col>
                                <Col className="text-center">
                                    <Image src={java} />
                                </Col>
                                <Col className="text-center">
                                    <Image src={html} />
                                </Col>
                                <Col className="text-center">
                                    <Image src={css} />
                                </Col>
                                <Col className="text-center">
                                    <Image src={node} />
                                </Col>
                                <Col className="text-center">
                                    <Image src={react} />
                                </Col>
                                <Col className="text-center">
                                    <Image src={mysql} />
                                </Col>
                                <Col className="text-center">
                                    <Image src={mongo} />
                                </Col>
                                <Col className="text-center">
                                    <Image src={postgres} />
                                </Col>
                    </Row>
                    <Row xs="auto" className='justify-content-md-center' id='cloud'>
                        <Col className="text-center">
                            <Image src={kubernetes} />
                        </Col>
                        <Col className="text-center">
                            <Image src={docker} />
                        </Col>
                        <Col className="text-center">
                            <Image src={aws} />
                        </Col>
                    </Row> 
                </Row>
            </Container>          
            <Container fluid id='education' className='to-the-left'>
                <Row>
                    <p className='heading1' id='edu-heading'>
                        Education 
                    </p>
                </Row>
                <Row className="align-items-center edu">
                    <Col sm={3}>
                        <Image src={sfState}></Image>
                    </Col>
                    <Col sm={9}>
                        <div className="edu-details">
                            <p className="degree">Master of Science in <span className='highlight-text'>Computer Science </span></p>
                            <p className="institution">San Francisco State University, San Francisco, CA</p>
                            <p className="duration">Aug 2023 - Expected May 2025</p>
                        </div>
                    </Col>
                </Row>
                <Row className="align-items-center edu">
                    <Col sm={3}>
                        <Image src={dsi} className="edu-logo" />
                    </Col>
                    <Col sm={9}>
                        <div className="edu-dsi-details">
                            <p className="degree">Bachelor of Science in 
                                <span className='highlight-text'> Information Science & Engineering</span></p>
                            <p className="institution">Visvesvaraya Technological University, India</p>
                            <p className="duration">Aug 2018 - Jul 2022</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid id='certifications' className='to-the-left'>
                <Row>
                    {/* <Col sm className="p-0">
                        <Image src={aHoliday1}/>
                    </Col> */}
                    <Col sm>
                        <Row>
                            <p className='heading1' id="certs-heading">
                                Certifications
                            </p>
                        </Row>
                        <Row className='certs'>
                            <Col sm={3}>
                                <a href="https://www.credly.com/badges/a58d31aa-13bf-463e-a8fa-525bcdd36f65/public_url" target="_blank" rel="noopener noreferrer">
                                    <Image src={awscertification} />
                                </a>
                            </Col>
                            <Col sm={3}>
                                <a href="https://www.credly.com/badges/00e08bc7-a6d0-4be8-a0e0-5f10159adf6d/public_url" target="_blank" rel="noopener noreferrer">
                                    <Image src={ckad} />
                                </a>
                            </Col>
                        </Row>
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
                    {/* <Col sm className='exp-cells'>
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
                    </Col> */}
                    <Col sm className='exp-cells'>
                        <h3>
                            Backend Developer
                        </h3>
                        <p>
                            Associated Students of San Francisco State University
                            <br></br>
                            December 2023 - Present
                        </p>
                        {/* <Button onClick={() => setWDI(true)}>My Role</Button> */}
                    </Col>
                    <Col sm className='exp-cells'>
                        <h3>
                            Software Engineer - Backend
                        </h3>
                        <p>
                            Larsen & Tubro InfoTech
                            <br></br>
                            July 2022 - August 2023
                        </p>
                        {/* <Button onClick={() => setSSE(true)}>My Role</Button> */}
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
                        {/* <Button onClick={() => setDes(true)}>My Role</Button> */}
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
                        {/* <Button onClick={() => setcode13(true)}>My Role</Button> */}
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
                    {projects.map((project) => (
                        <div key={project.id} className="project-option">
                                <Row 
                                    className={`project-title ${selectedProject === project.id ? 'expanded' : ''}`} 
                                    onClick={() => toggleProject(project.id)} >
                                        <Col sm={8}>{project.title}</Col>
                                        <Col className='d-flex justify-content-md-end h-100' sm={4}>
                                            {selectedProject === project.id ?
                                            (<Image src={minus}/>) : (<Image src={plus}/>)
                                            }
                                        </Col>
                                </Row>
                            {selectedProject === project.id && (
                                <Row className="project-description">
                                {selectedProject === 1 && (
                                    <div>
                                    <p>
                                        <h3>Tech Stack: Unity 3D, C#, XR Interaction Toolkit, FBX, BIM, Unity Physics, Hinge Joints, Configurable Joints</h3>
                                        Developed a Virtual Reality Environment for Engineering (VREE), an <span className='highlight-text'>SEAONC (Structural Engineers Association of Northern California) - sponsored VR-based serious game</span> designed to enhance civil engineering education by providing an immersive training environment for <span className='highlight-text'>post-earthquake damage assessment</span>. This project helps students and professionals inspect buildings, identify damages, and evaluate safety conditions following an earthquake.
                            
                                        <br></br>
                            
                                        <span className='pd-spans'>Key Achievements and Learnings:</span>
                                        <br></br>
                            
                                        <strong>Developed an Interactive VR Training System:</strong> Created a <span className='highlight-text'>realistic damage assessment simulation</span> aligned with the <span className='highlight-text'>Safety Assessment Program (SAP)</span> of the Structural Engineers Association of Northern California (SEAONC).
                                        <br></br>
                            
                                        <strong>Enhanced User Interactivity:</strong> Implemented <span className='highlight-text'>clickable damages</span> using the XR Ray Interactor, interactable doors with realistic physics, and a <span className='highlight-text'>VR Scoreboard</span> to track performance dynamically.
                                        <br></br>
                            
                                        <strong>Expanded Virtual Environment:</strong> Built an <span className='highlight-text'>explorable 3D building interior</span> by adding realistic materials, lighting, and solidifying structures with colliders for a more immersive experience.
                                        <br></br>
                            
                                        <strong>Redesigned Scoring System:</strong> Created a <span className='highlight-text'>dynamic VR scoreboard</span> that evaluates trainees' performance, with a modular system for easily adding new damages and assessments.
                                        <br></br>
                            
                                        <strong>System Architecture Improvements:</strong> Refactored game logic following the <span className='highlight-text'>Single Responsibility Principle (SRP)</span>, separating damage registration, UI updates, and sound management for better maintainability.
                                        <br></br>
                            
                                        <strong>Technology-Driven Education:</strong> Integrated <span className='highlight-text'>real-time structural physics simulation</span> to mimic real-world damage conditions, enhancing training effectiveness.
                                        <br></br>
                            
                                        <strong>Future Enhancements:</strong> Developing a <span className='highlight-text'>multiplayer collaboration mode (VREEverse)</span>, integrating hazard warnings, and introducing virtual tools commonly used in structural inspections.
                                        <br></br>
                            
                                        This project leverages cutting-edge Virtual Reality (VR) technology to revolutionize civil engineering education by providing a safe, cost-effective, and highly interactive training solution. 🚀
                                    </p>
                            
                                    <Row className='d-flex justify-content-md-center'>
                                        <Col>
                                            <a href="https://github.com/monishamekala/VREE-earthquake-environment.git" target="_blank" rel="noopener noreferrer" className='d-flex justify-content-md-center download-link' >
                                                <Button className='pc-button'>Github Repository</Button>
                                            </a>
                                        </Col>
                                    </Row>
                                    </div>
                                )}
                                {selectedProject === 2 && (
                                    <div>
                                    <p>
                                        <h3>Tech Stack: Python, R, Random Forest, Scikit-learn, Caret, Pandas, NumPy, Matplotlib, Seaborn, ggplot2</h3>
                                        Developed a <span className='highlight-text'>machine learning-based student success prediction model</span> to identify at-risk students, enabling educational institutions to <span className='highlight-text'>improve retention and optimize support strategies.</span> Conducted an AI ethics audit to ensure fairness, bias mitigation, and transparency in predictive analytics.
                                        
                                        <br></br>
                                        
                                        <span className='pd-spans'>Key Achievements and Learnings:</span>
                                        <br></br>
                                        
                                        <strong>Machine Learning Model Development:</strong> Built and trained a <span className='highlight-text'>Random Forest model</span> to classify students into dropout, enrolled, or graduated categories, achieving a balanced accuracy of 83.26%.
                                        <br></br>
                                        
                                        <strong>Data Processing & Analysis:</strong> Processed and cleaned a dataset of <span className='highlight-text'>4,424 student records with 36 academic and socio-economic features</span>, ensuring high data quality and balanced class distributions.
                                        <br></br>
                                
                                        <strong>Model Performance Optimization:</strong> <span className='highlight-text'>Achieved 87.2% accuracy</span> in binary classification and 78.1% accuracy in multiclass classification, utilizing cross-validation, AUC, sensitivity, and specificity metrics for model validation.
                                        <br></br>
                                
                                        <strong>Feature Importance Analysis:</strong> Identified key predictors of student success, such as course performance, tuition status, and enrollment history, providing actionable insights for intervention strategies.
                                        <br></br>
                                
                                        <strong>AI Ethics & Trustworthiness Audit:</strong> Evaluated the model's fairness, potential biases, and privacy compliance, ensuring responsible and transparent deployment in educational settings.
                                        <br></br>
                                
                                        <strong>Data Visualization & Interpretation:</strong> Utilized Matplotlib, Seaborn, and ggplot2 to create intuitive visualizations, making insights accessible for non-technical stakeholders.
                                        <br></br>
                                
                                        <strong>Machine Learning Pipeline Implementation:</strong> Developed and structured an R-based modular ML workflow, ensuring scalability and reproducibility for future model improvements.
                                        <br></br>
                                
                                        This project not only showcased my technical expertise in machine learning and data science but also emphasized my commitment to ethical AI, ensuring that predictive models are transparent, fair, and practically useful in real-world education systems.
                                    </p>
                                
                                    <Row className='d-flex justify-content-md-center'>
                                        <Col>
                                            <a href="https://github.com/monishamekala/student-dropout-prediction" target="_blank" rel="noopener noreferrer" className='d-flex justify-content-md-center download-link' >
                                                <Button className='pc-button'>Github Repository</Button>
                                            </a>
                                        </Col>
                                    </Row>
                                </div>
                                )}
                                {selectedProject === 3 && (
                                    <div>
                                        <p>
                                        <h3>Tech Stack: JavaScript, React.js, Node.js, Nginx, MySQL, AWS EC2, AWS RDS, Git</h3>
                                        Led a collaborative team of five as the <span className='highlight-text'>Team Lead for a Food Ordering web application project</span>, focusing on <span className='highlight-text'>backend development, animations, website responsiveness, and overseeing code deployment on AWS servers.</span> This experience enhanced my technical expertise and emphasized the importance of leadership and responsibility in project management.
                                    
                                        <br></br>
                                    
                                        <span className='pd-spans'>Key Achievements and Learnings:</span>
                                        <br></br>
                                    
                                        <strong>Team Leadership:</strong> Guided a diverse team, leveraging individual strengths to meet project goals. Managed critical challenges effectively, developing strong skills in responsibility and working under pressure.
                                        <br></br>
                                    
                                        <strong>Communication and Collaboration:</strong> Maintained team alignment and focus, ensuring cohesive workflow and optimal productivity amid potential distractions.
                                        <br></br>
                                    
                                        <strong>AWS Deployment:</strong> <span className='highlight-text'>Successfully deployed the application</span> on AWS EC2 servers and managed the database on AWS RDS, demonstrating proficiency in cloud-based technologies.
                                        <br></br>
                                    
                                        <strong>Technological Stack:</strong> Utilized NodeJS, Express, React, Nginx, and MySQL 8.0.33, gaining hands-on experience with these tools for the first time.
                                        <br></br>
                                    
                                        <strong>Tool Proficiency:</strong> Adapted to using Visual Studio Code as the primary Integrated Development Environment (IDE).
                                        <br></br>
                                    
                                        <strong>Technical Contributions:</strong> <span className='highlight-text'>Directed backend development</span> and <span className='highlight-text'>Twitter API integration</span>, while ensuring website responsiveness with responsive design, which improved page load speed by 40%. Designed secure database schemas, adhering to best practices.
                                        <br></br>
                                    
                                        <strong>Data-Driven Development:</strong> Applied data-driven techniques and design patterns, reducing git conflicts by 75% through efficient version control. Presented on testing, debugging, and best practices, <span className='highlight-text'>earning 20 additional points.</span>
                                        <br></br>
                                    
                                        This project not only showcased my technical skills but also demonstrated <span className='highlight-text'>my leadership and collaboration capabilities</span>, applying cutting-edge technologies in a real-world scenario. I am eager to continue evolving and contributing to impactful projects in the dynamic field of web development.
                                        </p>
                                        <Row>
                                            <Col sm>
                                                <Image src={pc2}/>
                                            </Col>
                                            <Col sm>
                                                <Image src={pc1}/>
                                            </Col>
                                            <Col sm>
                                                <Image src={pc3}/>
                                            </Col>
                                        </Row>
                                        <Row className='d-flex justify-content-md-center'>
                                            <Col>
                                                <a href={pcInfo} download="Monisha_Mekala_Project" className='d-flex justify-content-md-center download-link'>
                                                    <Button className='pc-button'>More Info On this Project</Button>
                                                </a>
                                            </Col>
                                            <Col>
                                                <a href="https://github.com/CSC-648-SFSU/csc648-04-fall23-team07-2" className='d-flex justify-content-md-center download-link' target="_blank" rel="noopener noreferrer">
                                                    <Button className='pc-button'>Github Repository</Button>
                                                </a>
                                            </Col>
                                        </Row>
                                    </div>
                                )}
                                {selectedProject === 4 && (
                                    <div>
                                        <h3>Tech Stack: The backend was powered by PostgreSQL for efficient data storage and retrieval, with Prisma and Node.js reducing database latency by 40% for smooth and scalable data handling. 
                                        </h3>

                                        <p>
                                            Developed and maintained a real-time data visualization platform to analyze passenger traffic at San Francisco International Airport (SFO). By leveraging a dataset of 35.3k rows, this platform <span className='highlight-text'>improved data processing efficiency by 25%</span>, enabling faster and more accurate insights.
                                            
                                            <br></br>
                                            
                                            Interactive visualizations <span className='highlight-text'>built with D3.js on a Next.js web application</span>, providing actionable insights into peak travel periods, airline performance, and passenger behavior. These insights led to a 30% improvement in decision-making speed for airport operations.
                                            
                                            <br></br>
                                                                                        
                                            Additionally, <span className='highlight-text'>predictive analytics and comparative metrics</span> were integrated to support strategic planning, reducing resource allocation time by 20% and enhancing overall operational efficiency.
                                        </p>
                                        <Row>
                                            <Col sm>
                                                <Image src={sfo1}/>
                                            </Col>
                                            <Col sm>
                                                <Image src={sfo2}/>
                                            </Col>
                                            <Col sm>
                                                <Image src={sfo3}/>
                                            </Col>
                                            <Col sm>
                                                <Image src={sfo4}/>
                                            </Col>
                                        </Row>
                                        <Row className='d-flex justify-content-md-center'>
                                            <Col>
                                                <a href="https://github.com/monishamekala/dataVisualization-SFO-Airtraffic" target="_blank" rel="noopener noreferrer" className='d-flex justify-content-md-center download-link'>
                                                    <Button className='pc-button'>Github Repository</Button>
                                                </a>
                                            </Col>
                                        </Row>
                                    </div>
                                )}
                                {selectedProject === 5 && (
                                    <div>
                                        <h3>Tech Stack: Python, Jupyter Notebook, Numpy, TensorFlow, Scikit</h3>
                                        <p>
                                            Led a team at Dayananda Sagar Academy of Technology and Management, Bangalore, in developing a machine learning solution for early Alzheimer's disease detection. The project involved creating a Bidirectional Recurrent Neural Network (Bi-RNN) algorithm to analyze blood plasma and assess the disease's stage, aiming to provide a quick and cost-effective early diagnosis method.

                                            <br></br>

                                            <span className='pd-spans'>Key Achievements:</span>
                                            <br></br>

                                            <strong>Algorithm Development:</strong> Developed the Bi-RNN algorithm, tackling challenges in dataset reading and integration. Utilized Long Short Term Memory (LSTM) techniques, achieving 92% accuracy and an AUC of 91-95%.
                                            <br></br>

                                            <strong>Research Contributions:</strong> Presented the research at the National Conference on Convergence of Science, Technology & Management, Bangalore, and published findings in reputable journals, including <em>'Early detection of Alzheimer’s: Modalities and Methods'</em> in IRO Journals and <em>'Early detection of Alzheimer’s using blood plasma proteins with Recurrent Neural Networks'</em> in IFREP.
                                            <br></br>

                                            <strong>Technical Contributions:</strong> Focused on algorithm development, data preprocessing, and feature engineering. Achieved 92% accuracy on a 13,500-record dataset from ADNI, resolving data imbalance and overfitting issues, which improved prediction accuracy by 20%. Managed project timelines, maintained quality documentation, conducted code reviews, and ensured timely delivery.
                                            <br></br>

                                            This project refined my technical skills and allowed me to contribute significantly to healthcare technology. I am eager to continue applying my expertise in impactful projects at the intersection of technology and healthcare.
                                        </p>
                                    </div>
                                )}
                                </Row>
                            )}
                        </div>
                    ))}
                </Row>
            </Container>
            <Container fluid id='publish' className='to-the-left'>
                <Row>
                    <p className='heading1' id="publish-heading">
                        Publications 
                    </p>
                </Row>
                <Row className='align-items-center'>
                <Col sm>
                    <Row>
                        <Col>
                            <div className="publish-details">
                                <p className="publish-title">Early Detection of Alzheimer’s: Modalities and Methods</p>
                                    <a href="https://irojournals.com/aicn/article/view/4/1/5" target="_blank" rel="noopener noreferrer">
                                        <Button className='publish-btn-1'>View</Button>
                                    </a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="publish-2-details">
                            <p className="publish-title">Early Detection of Alzheimer’s using Blood Plasma Proteins with Recurrent Neural Networks</p>
                            <a href="https://ijercse.com/viewabstract.php?id=16046&volume=Volume9&issue=Issue12" target="_blank" rel="noopener noreferrer">
                                <Button className='publish-btn-2'>View</Button>
                            </a>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col className='d-flex justify-content-center align-items-center'>
                    <Image src={aHoliday}/>
                </Col>
                </Row>         
            </Container>
            <Container fluid id='footer' className='to-the-left'>
                <Row className='footer-row'>
                    <Col sm={8}>
                        <p className='heading1' id="footer-name">MONISHA MEKALA</p>
                        <p className="small-text">
                            San Francisco, CA 94132
                        </p>
                    </Col>
                    <Col sm={4} id="footer-content">
                        <p className='normal-content'>
                            <a href="mailto:mvn.monisha@gmail.com" target="_blank" rel="noopener noreferrer">
                                at: mvn.monisha@gmail.com
                            </a>
                            <br></br>
                            <a href="https://www.linkedin.com/in/monisha-mekala/" target="_blank" rel="noopener noreferrer">
                                linkedIn: monisha-mekala
                            </a>
                            <br></br>
                            <a href="https://github.com/monishamekala" target="_blank" rel="noopener noreferrer">
                                git: monishamekala
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container>

            <MyVerticallyCenteredModal
                show={GRA}
                org = 'San Francisco State University'
                role = 'Graduate Research Assistant'
                onHide={() => setGRA(false)}
            />

            <MyVerticallyCenteredModal
                show={WDI}
                org = 'Associated Students of San Francisco State University'
                role = 'Backend Developer'
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
