import {Container, Row, Col} from 'react-bootstrap'
const Hero = () => {
  return(
    <div className="bg-hero-section d-flex justify-content-center align-items-center">
    <Container className="d-flex justify-content-center align-items-center hero-container">
      <Row className="mx-5">
        <Col className="px-5">
        <h1 className="fw-semibold"><span>Selamat datang!</span> di website kami yang memiliki product<br/> <span>High Quality!</span></h1>
        </Col>
      </Row>
    </Container>
    </div>
  )
}
export default Hero