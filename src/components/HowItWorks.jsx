import { Card, Col, Container, Row } from 'react-bootstrap'

function HowItWorks() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">How ShopWise Works</h2>

        <Row>
          <Col md={4} className="mb-3">
            <Card className="h-100 shadow-sm text-center p-3">
              <Card.Body>
                <Card.Title>1. Choose Items</Card.Title>
                <Card.Text>
                  Pick the groceries you need and enter the quantities for your list.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-3">
            <Card className="h-100 shadow-sm text-center p-3">
              <Card.Body>
                <Card.Title>2. Compare Stores</Card.Title>
                <Card.Text>
                  ShopWise checks prices across Walmart, Target, and Costco.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-3">
            <Card className="h-100 shadow-sm text-center p-3">
              <Card.Body>
                <Card.Title>3. Save Money</Card.Title>
                <Card.Text>
                  See the cheapest mixed-store total and the best single-store option.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HowItWorks