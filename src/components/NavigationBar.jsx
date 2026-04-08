import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

//this component shows the top navigation bar
function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>

        {/* brand name (click goes home) */}
        <Navbar.Brand as={NavLink} to="/">
          ShopWise
        </Navbar.Brand>

        {/* mobile toggle button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* nav links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            {/* home */}
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>

            {/* optimizer */}
            <Nav.Link as={NavLink} to="/optimizer">
              Optimizer
            </Nav.Link>

            {/* compare */}
            <Nav.Link as={NavLink} to="/compare">
              Compare
            </Nav.Link>

            {/* about */}
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default NavigationBar