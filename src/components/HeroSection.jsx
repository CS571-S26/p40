import { Button, Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import ShopWiseLogo from '../assets/ShopWiseLogo.png'

function HeroSection() {
  return (
    <section className="hero-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <h1 className="fw-bold mb-3">Save Money on Groceries 🛒</h1>

            <p className="lead text-muted mb-4">
              Compare prices across stores and optimize your grocery list in seconds.
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <Button as={NavLink} to="/optimizer" variant="success" size="lg">
                Optimize My List
              </Button>

              <Button as={NavLink} to="/compare" variant="outline-success" size="lg">
                Compare Item
              </Button>
            </div>
          </Col>

          <Col md={5} className="mt-4 mt-md-0 text-center">
            <img
              src={ShopWiseLogo}
              alt="ShopWise grocery savings illustration"
              className="img-fluid rounded shadow-lg"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection