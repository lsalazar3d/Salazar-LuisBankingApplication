import React, { useState } from 'react';
import {Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './home.css'





const Home=()=>{
    const [balance, setBalance] = useState(1000)
    return (

        //NavBar
           <div>
                        <Navbar expand="lg" className="bg-body-tertiary">
                        <Container>
                            <Navbar.Brand href="#home">Luis Front End Bank App</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                
                            <Container>
                                    <Navbar.Brand href="#home">
                                        <img
                                        alt=""
                                        src="https://pngimg.com/uploads/bank/bank_PNG5.png"
                                        width="60"
                                        height="60"
                                        className="d-inline-block align-top"
                                        />{' '}
                                    
                                    </Navbar.Brand>
                            </Container>
                            
                                <Nav.Link as={Link} to="/home" className="nav-link" activeclassname="active">Home </Nav.Link>
                                <Nav.Link as={Link} to="/createaccount" className="nav-link" activeclassname="active">Create Account</Nav.Link>
                                <Nav.Link as={Link} to="/deposit" className="nav-link" activeclassname="active">Deposit</Nav.Link>
                                <Nav.Link as={Link} to="/withdraw" className="nav-link" activeclassname="active">Withdraw</Nav.Link>
                                <Nav.Link as={Link} to="/alldata" className="nav-link" activeclassname="active">All Data</Nav.Link>
                                <Nav.Link as={Link} to="/cashbalance" className="nav-link" activeclassname="active">Balance</Nav.Link>
                                

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                        </Navbar>

                        <div className="jumbotron">
                            <hr className="my-4"/> 
                            <h1 className="display-4">Welcome to the Bad Bank Home Page</h1>
                            <h1 className="display-6">Your current Balance is: ${balance} </h1>
                        </div>

                        <div className='card_container'>            
                        <div className="row">
                             <div className="col-md-3 mb-4">

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://pngimg.com/uploads/husky/husky_PNG47.png" />
                                <Card.Body>
                                    <Card.Title>New Members</Card.Title>
                                    <Card.Text>
                                Wanting to join our bank? start your registration for a new account below.
                                    </Card.Text>
                                    <Link to="/createaccount">
                                         <Button variant="primary" className="nav-link" activeclassname="active">Click Here</Button>
                                  </Link>
                                </Card.Body>
                                </Card>
                                </div>
                                 <div className="col-md-3 mb-4">

                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://image.shutterstock.com/image-vector/black-color-round-seal-sticker-260nw-2259514153.jpg" />
                                <Card.Body>
                                    <Card.Title>Deposit</Card.Title>
                                    <Card.Text>
                                    Wanting to deposit cash or a check? initiate a deposit below.
                                    </Card.Text>
                                    <Link to="/deposit">
                                    <Button variant="primary" className="nav-link" activeclassname="active">Click Here</Button>
                                    </Link>
                                </Card.Body>
                                </Card>
                                </div>
                                  <div className="col-md-3 mb-4">
                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://image.shutterstock.com/image-illustration/3d-withdrawing-cash-atm-dollar-260nw-2188157743.jpg" />
                                <Card.Body>
                                    <Card.Title>Withdraw</Card.Title>
                                    <Card.Text>
                                    Wanting to withdraw cash or a check? initiate a withdraw below.
                                    </Card.Text>
                                    <Link to="/withdraw">
                                    <Button variant="primary" className="nav-link" activeclassname="active">Click Here</Button>
                                    </Link>
                                </Card.Body>
                                </Card>
                                </div>
                                  <div className="col-md-3 mb-4">
                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/coins-stack-balance-scale-money-260nw-1841094223.jpg" />
                                <Card.Body>
                                    <Card.Title>Balance</Card.Title>
                                    <Card.Text>
                                    Wanting to check your balance? check your balance below.
                                    </Card.Text>
                                    <Link to="/cashbalance">
                                    <Button variant="primary" className="nav-link" activeclassname="active">Click Here</Button>
                                    </Link>
                                </Card.Body>
                                </Card>
                                </div>
                                </div>
                        </div>

                    
                        <hr className="my-4"/> 
                    
                            <Card className="text-center">
                            <Card.Body>
                                <Card.Title>Created by: Luis Salazar</Card.Title>
                                <Button variant="primary">Go to Github Repository</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">Last Updated: 09/24/2023</Card.Footer>
                            </Card>                 
            
        </div>

    )
    
}

export default Home