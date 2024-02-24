import React from 'react'
import { useState,useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

 export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ "[Frontend]", "[Backend]"];
  const [text, setText] = useState('');
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
 
  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my portfolio</span>
            <h1>{`Hello I am a Software Developer :`} <span className='wrap'>{text}</span></h1>
            <p> I am Peter Danjuma, a versatile MERN stack developer with a passion for creating impactful web applications,I possess a robust understanding of both front-end and back-end technologies, and I thrive in the dynamic realm of web development. Each line of code represents an opportunity to craft something remarkable, and I am driven by a fervor for unraveling intricate challenges. My voyage into programming commenced with an insatiable curiosity and a thirst for knowledge, and it has since evolved into an unwavering quest for software engineering excellence.
            If you are looking for an experienced MERN stack developer who can bring your ideas to life? Let's talk and create something extraordinary.
          </p>
            <button onClick={() => console.log('connect')}>Let’s connect < ArrowRightCircle size={25} /></button>
          </Col>
            <img src={headerImg} alt='header img' />
          <Col  xs={12} md={6} xl={5}>

          </Col>
        </Row>
      </Container>

    </section>
  )
}

