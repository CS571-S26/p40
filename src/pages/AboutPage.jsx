import { Container } from 'react-bootstrap'

function AboutPage() {
  return (
    <Container className="py-5">
      <h1 className="mb-3">About ShopWise</h1>

      <p className="mb-3">
        ShopWise is a grocery comparison web application designed to help college
        students and young adults save money while shopping. It allows users to
        compare prices across multiple stores and make smarter purchasing decisions.
      </p>

      <p className="mb-3">
        The application includes a grocery list optimizer, which calculates the
        cheapest combination of stores for a given list, as well as a single-item
        comparison tool that shows price differences across Walmart, Target, and Costco.
      </p>

      <p>
        Built using React, React Router, and React Bootstrap, ShopWise focuses on
        creating a clean, intuitive, and interactive user experience that makes
        grocery shopping more efficient and budget-friendly.
      </p>
    </Container>
  )
}

export default AboutPage