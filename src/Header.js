import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Header({ loggedInUser }) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    navigate("/login");
  };
  console.log(JSON.parse(loggedInUser));

  const handleLogout = () => {
    localStorage.removeItem("fakeUser");
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {loggedInUser && (
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </Nav>
          )}
          {loggedInUser && (
            <Button variant="primary" onClick={handleLogout}>
              Logout
            </Button>
          )}
          {location.pathname !== "/login" && location.pathname !== "/profile"  && !loggedInUser && (
            <Button variant="primary" onClick={handleClick}>
              Login
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
