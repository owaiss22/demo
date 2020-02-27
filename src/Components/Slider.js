import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './override.css';
import { Container, Typography, Button, Grid, ModalManager } from '@material-ui/core';
import {Dropdown} from 'react-bootstrap';
import Modal from './Modal';
import img1 from '../Components/Images/pic6.jpg'
import img2 from '../Components/Images/pic8.jpg'

const styles = theme => ({
    firstHeading: {
        fontSize: 23,
        width: '100%',
        lineHeight: '40px',
        textAlign: 'left',
        [theme.breakpoints.up("md")]: {
            fontSize: '70px',
            width: '60%',
            fontFamily: 'Tungsten A, Tungsten B, Khand, sans-serif',
            lineHeight: '70px',
        }
    },
    spacingDiv: {
        height: 100,
        [theme.breakpoints.up("md")]: {
            height: 200
        }
    },
    learnMoreButton: {
        border: "1px solid white",
        "&:hover": {
            backgroundColor: "black",
            color: "white",
            border: "1px solid black",
            boxShadow: "none",
            transition: 'all 0.5s'
        }
    }
});

class DemoCarousel extends Component {

    render() {
        const { classes } = this.props;

        return (
            <Carousel autoPlay={true} infiniteLoop showArrows={true} emulateTouch showThumbs={false}>
                <div style={{
                    color: 'white',
                    backgroundColor: "#963596",
                    // backgroundImage: `url(${img1})`,
                    // backgroundRepeat: 'no-repeat',
                    // backgroundSize: 'cover'
                    position: 'relative'
                }}>
                    <img src={img1} />
                    <Container maxWidth="lg" style={{
                        color: "white", position: 'absolute',
                        top: '75%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <Grid container spacing={0}>
                            <Grid
                                style={{ marginTop: "18%" }}
                                item
                                xs={12}
                                md={12}
                            >
                                <Modal />
                                <div style={{ float: 'right' }}>
                                    <Button variant='outlined'
                                        style={{
                                            color: 'gold',
                                            backgroundColor: 'black',
                                            borderColor: 'gold',
                                            height: 46,
                                            width: 150,
                                            borderRadius: 10,
                                            marginTop: -350,
                                            marginRight: 10

                                        }}
                                        className={classes.learnMoreButton}
                                    >Sign in</Button>
                                </div>
                                {/* <div>
                                    <Dropdown  style={{
                                            color: 'gold',
                                            backgroundColor: 'black',
                                            borderColor: 'gold',
                                            height: 46,
                                            width: 150,
                                            borderRadius: 10,
                                            float:'right',
                                            marginTop: '-200px'
                                        }}>
                                        <Dropdown.Toggle  >
                                            Sign In
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Login: <input style={{ float: 'right' }} /></Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Password: <input style={{ float: 'right' }} /></Dropdown.Item>
                                            <Dropdown.Item href="#/action-3"><button>LOGIN</button></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div> */}
                            </Grid>
                            <Grid item xs={4} md={2}>
                                <div style={{ height: '100vh' }}>
                                    <Typography
                                        className={classes.firstHeading}
                                        variant="h4"
                                        style={{
                                            fontWeight: "bold",
                                            fontWeight: 500,
                                            color: 'gold'
                                        }}
                                    >
                                        Event Management

                                    </Typography>
                                    <div style={{ float: 'left' }}>
                                        <Button variant='outlined'
                                            style={{
                                                color: 'gold',
                                                backgroundColor: 'black',
                                                borderColor: 'gold',
                                                height: 46,
                                                width: 213,
                                                borderRadius: 0,
                                                marginTop: 30
                                            }}
                                            className={classes.learnMoreButton}
                                        >See How it works</Button>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <div style={{ color: 'white', backgroundColor: "#963596", backgroundImage: `url(${img1})` }}>
                    <Container maxWidth="lg" style={{ color: "white" }}>
                        <Grid container spacing={0}>
                            <Grid
                                style={{ marginTop: "18%" }}
                                item
                                xs={12}
                                md={12}
                            >
                                <Modal />
                                {/* <div style={{ float: 'right' }}>
                                        <Button variant='outlined'
                                            style={{
                                                color: 'white',
                                                height: 46,
                                                width: 150,
                                                borderRadius: 10,
                                                marginTop: -250,
                                                marginRight: 10
                                                
                                            }}
                                            className={classes.learnMoreButton}
                                        >Sign In</Button>
                                    </div> */}
                                <div style={{ float: 'right' }}>
                                    <Button variant='outlined'
                                        style={{
                                            color: 'gold',
                                            backgroundColor: 'black',
                                            borderColor: 'gold',
                                            height: 46,
                                            width: 150,
                                            borderRadius: 10,
                                            marginTop: -350,
                                            marginRight: 10
                                        }}
                                        className={classes.learnMoreButton}
                                    >Sign in</Button>
                                </div>

                            </Grid>
                            <Grid item xs={4} md={2}>
                                <div style={{ height: '100vh' }}>
                                    <Typography
                                        className={classes.firstHeading}
                                        variant="h4"
                                        style={{
                                            fontWeight: "bold",
                                            fontWeight: 500,
                                            color: 'gold',
                                        }}
                                    >
                                        Event Management
                                    </Typography>
                                    <div style={{ float: 'left' }}>
                                        <Button variant='outlined'
                                            style={{
                                                color: 'gold',
                                                backgroundColor: 'black',
                                                borderColor: 'gold',
                                                height: 46,
                                                width: 213,
                                                borderRadius: 0,
                                                marginTop: 30
                                            }}
                                            className={classes.learnMoreButton}
                                        >See How it works</Button>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </Carousel>
        );
    }
};

export default withStyles(styles)(DemoCarousel);