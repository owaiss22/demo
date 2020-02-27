import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import PinterestIcon from '@material-ui/icons/Pinterest';

//Router
import { Link } from "react-router-dom";

const icons = [
    FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon, YouTubeIcon, GitHubIcon, PinterestIcon
];

const styles = {

    fb: {
        '&:hover': {
            color: '#3b5998',
        }
    },
    insta: {
        '&:hover': {
            color: '#3f729b',
        }
    },
    linkdin: {
        '&:hover': {
            color: '#0e76a8',
        }
    },
    twitter: {
        '&:hover': {
            color: '#00acee',
        }
    },
    youtube: {
        '&:hover': {
            color: '#c4302b',
        }
    },
    github: {
        '&:hover': {
            color: '#211F1F',
        }
    },
    pinterest: {
        '&:hover': {
            color: '#c8232c',
        }
    }
}


class Footer extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Navbar style={{ height: '90px', marginTop: '100px' }} collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Event Management</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav style={{ padding: '3px', marginLeft: '280px' }} className="mr-auto">
                            <Nav.Link href="#about" className="nav-link" >
                                
                            </Nav.Link>
                            <Nav.Link href="#contact" className="nav-link" >
                                
                            </Nav.Link>
                            <Nav.Link href="#contact" className="nav-link" >
                                
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">FOLLOW US ON</Nav.Link>
                            <Navbar.Brand>
                                < FacebookIcon className={classes.fb} />
                            </Navbar.Brand>
                            <Navbar.Brand>
                                < TwitterIcon className={classes.twitter} />
                            </Navbar.Brand>
                            <Navbar.Brand>
                                < YouTubeIcon className={classes.youtube} />
                            </Navbar.Brand>
                            <Navbar.Brand>
                                < InstagramIcon className={classes.insta} />
                            </Navbar.Brand>
                            <Navbar.Brand>
                                < GitHubIcon className={classes.github} />
                            </Navbar.Brand>
                            <Navbar.Brand>
                                < PinterestIcon className={classes.pinterest} />
                            </Navbar.Brand>
                            <Navbar.Brand>
                                < LinkedInIcon className={classes.linkdin} />
                            </Navbar.Brand>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Footer)