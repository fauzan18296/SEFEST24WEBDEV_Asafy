import { Container,Row,Col } from "react-bootstrap";
import Img1 from "../assets/img/img1.jpg"
import Img2 from "../assets/img/img2.jpg"
import Img3 from "../assets/img/img3.jpg"
import Img4 from "../assets/img/img4.jpg"
import Img5 from "../assets/img/img5.jpg"
import Img6 from "../assets/img/img6.jpg"
import Img7 from "../assets/img/img7.jpg"
import Img8 from "../assets/img/img8.jpg"
import Img9 from "../assets/img/img9.jpg"
import Img10 from "../assets/img/img10.jpg"

const Product = () => {
  return (
    <div className="bg-product d-flex align-items-center">
    <Container>
    <Row>
      <Col>
      <img width='50%' src={Img1} alt="" />
      </Col>
    </Row>
    </Container>
    </div>
  )
}
export default Product