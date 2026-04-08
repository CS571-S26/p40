import { Card, Col } from 'react-bootstrap'

//this component shows a summary card on homepage
function StoreSummaryCard({ title, text }) {
  return (
    <Col md={4} className="mb-4">
      
      <Card className="h-100 shadow-sm border-0 text-center p-3">
        
        <Card.Body>
            <Card.Title className="fw-semibold mb-2">{title}</Card.Title>
            <Card.Text className="text-muted">{text}</Card.Text>
        </Card.Body>

      </Card>

    </Col>
  )
}

export default StoreSummaryCard