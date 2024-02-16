import { Container, Navbar, Nav } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>Amazone</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/signin" className="nav-link">
              Signin
            </a>
          </Nav>
        </Navbar>
      </header>
      <Container className="mt-3">
        <Outlet />
      </Container>

      <footer>
        <div className="text-center">All right reserved</div>
      </footer>
    </div>
  )
}

export default App
