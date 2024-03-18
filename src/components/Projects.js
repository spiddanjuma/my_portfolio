import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/contact-manager.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/secretary-contact.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Contact Manager",
      description: "Nodejs & Expressjs",
      imgUrl: projImg1,
      projectLink: "https://github.com/spiddanjuma/contact-management-system"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      projectLink: "https://github.com/spiddanjuma/bootstrap-project-column"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      projectLink: "https://github.com/spiddanjuma/bootstrap-project-column"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      projectLink: "https://github.com/spiddanjuma/bootstrap-project-column"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      projectLink: "https://github.com/spiddanjuma/bootstrap-project-column"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      projectLink: "https://github.com/spiddanjuma/bootstrap-project-column"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are some of my projects</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
