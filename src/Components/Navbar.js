import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';


export default class Appbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                           <span style={{color:'white', float:'right'}} >customercare@traveltriangle.com</span>

                           <span style={{color:'white', float:'right', marginLeft:'5px'}}> | </span>

                           <span style={{color:'white', float:'right', marginLeft:'5px'}}>111-222-333</span>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}