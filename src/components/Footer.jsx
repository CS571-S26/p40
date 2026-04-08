import { Container } from 'react-bootstrap'

//this component shows footer at bottom
function Footer() {
  return (
    <footer className="bg-dark text-light mt-auto py-3">
      
      <Container className="text-center">
        {/* footer text */}
        <p className="mb-0">
          © {new Date().getFullYear()} ShopWise • Built for CS571
        </p>
      </Container>

    </footer>
  )
}

export default Footer