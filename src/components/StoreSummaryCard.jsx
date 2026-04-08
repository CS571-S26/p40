import { Card, Col } from 'react-bootstrap'

//this component shows a summary card on homepage
function StoreSummaryCard({ title, text }) {
  return (
    <Col md={4} className="mb-4">
      
      <Card className="h-100 shadow-sm">
        
        <Card.Body>
          {/* card title */}
          <Card.Title>{title}</Card.Title>

          {/* card text */}
          <Card.Text>{text}</Card.Text>
        </Card.Body>

      </Card>

    </Col>
  )
}

export default StoreSummaryCard