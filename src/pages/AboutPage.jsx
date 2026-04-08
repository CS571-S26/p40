import { Container } from 'react-bootstrap'

function AboutPage() {
  return (
    <Container className="py-5">
      <h1 className="mb-3">About ShopWise</h1>

      <p className="mb-3">
        ShopWise is a grocery comparison web application built to help college
        students and young adults find more affordable grocery options across
        different stores.
      </p>

      <p className="mb-3">
        Our project currently includes a homepage, a grocery list optimizer,
        and a single-item comparison page. We are using React, React Router,
        and React Bootstrap to create a clean and interactive interface.
      </p>

      <p>
        In the next stage of development, we plan to improve the comparison
        logic, expand the grocery dataset, and make the optimization results
        even more useful.
      </p>
    </Container>
  )
}

export default AboutPage