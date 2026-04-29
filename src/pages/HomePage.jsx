import { Container, Row } from 'react-bootstrap'
import StoreSummaryCard from '../components/StoreSummaryCard'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks'

function HomePage() {
  return (
    <>
      <HeroSection />

      <HowItWorks />

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