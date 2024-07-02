import {Container, Row, Col} from 'react-bootstrap'
import { Typewriter } from 'react-simple-typewriter'
const Hero = () => {
  const changeText = ['High Quality!', 'Luxury!', 'Expensive!']
  return(
    <div className="bg-hero-section d-flex justify-content-center align-items-center">
    <Container className="d-flex justify-content-center align-items-center hero-container">
      <Row className="mx-5">
        <Col className="px-5">
        <h2 className="fw-semibold"><span>Selamat datang!</span> di website kami yang memiliki product<br/> <span><Typewriter 
               words={changeText}
               loop={false}
               cursorStyle={"_"}
               cursor/></span></h2>
        </Col>
      </Row>
    </Container>
    </div>
  )
}
export default Hero