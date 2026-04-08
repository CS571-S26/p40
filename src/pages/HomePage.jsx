import { Button, Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import StoreSummaryCard from '../components/StoreSummaryCard'
import heroImg from '../assets/hero.png'   // ✅ THIS is the fix

function HomePage() {
  return (
    <>
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
              src={heroImg}
              alt="Groceries"
              className="img-fluid rounded shadow-lg"
            />
          </Col>

        </Row>
      </Container>
    </section> 

      <Container className="py-5">
        <Row>
          <StoreSummaryCard
            title="Compare Prices"
            text="Check how one grocery item is priced across Walmart, Target, and Costco."
          />

          <StoreSummaryCard
            title="Optimize Your Grocery List"
            text="Choose multiple items and see the cheapest store for each item and the cheapest total."
          />

          <StoreSummaryCard
            title="Built for Students"
            text="Designed around the real problem of grocery shopping on a student budget."
          />
        </Row>
      </Container>
    </>
  )
}

export default HomePage