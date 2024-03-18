import { Container, Row,  } from "react-bootstrap";

import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="footer" >
      <Container style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Row className="align-items-center mt-3">
          <div className="social-icon">
                <a href="https://github.com/spiddanjuma"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/peter-danjuma-8b61a3189/"><FaLinkedin /></a>
                <a href="https://twitter.com/spid247"><FaTwitter /></a>
              </div>
          </Row>
       
          
      </Container>
    </footer>
  )
}
