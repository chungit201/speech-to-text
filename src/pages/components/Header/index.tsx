import React from "react";
import {Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";
import logo from "../../../assets/images/logo.png"
const Header:React.FunctionComponent = () =>{
  return (
    <Navbar expand={"xl"} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">
          <img height={30} src={logo} alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-xl`}
          aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1"><i className="fa-solid fa-house" style={{marginRight:"0.5rem"}}></i> Trang chủ</Nav.Link>
              <Nav.Link href="#action2"><i className="fa-solid fa-tv" style={{marginRight:"0.5rem"}}></i>TV</Nav.Link>
              <Nav.Link href="#action2"> <i className="fa-regular fa-futbol"  style={{marginRight:"0.5rem"}}></i>Bóng đá</Nav.Link>

              <NavDropdown
                title="Thể loại"
                id={`offcanvasNavbarDropdown-expand-xl`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default Header
