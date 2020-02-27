import React from 'react';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import Register from './Registration';
// import { withStyles } from "@material-ui/core/styles";

// const styles = theme => ({
//     firstHeading: {
//         fontSize: 23,
//         width: '100%',
//         lineHeight: '40px',
//         textAlign: 'left',
//         [theme.breakpoints.up("md")]: {
//             fontSize: '70px',
//             width: '60%',
//             fontFamily: 'Tungsten A, Tungsten B, Khand, sans-serif',
//             lineHeight: '70px',
//         }
//     },
//     spacingDiv: {
//         height: 100,
//         [theme.breakpoints.up("md")]: {
//             height: 200
//         }
//     },
//     learnMoreButton: {
//         border: "1px solid white",
//         "&:hover": {
//             backgroundColor: "black",
//             color: "white",
//             border: "1px solid black",
//             boxShadow: "none",
//             transition: 'all 0.5s'
//         }
//     }
// });

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <Register/>
            </Modal.Body>
        </Modal>
    );
}

export default function App(props) {
  
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <ButtonToolbar>
           <div style={{ float: 'right' }}>
           <Button variant="primary" onClick={() => setModalShow(true)}
                 style={{
                    color: 'gold',
                    backgroundColor: 'black',
                    borderColor: 'gold',
                    height: 46,
                    width: 150,
                    borderRadius: 10,
                    marginTop: -190,
                    marginRight: 10,
                   float: 'left'
                    
                }}
               
            >
                Sign up
        </Button >
           </div>
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

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </ButtonToolbar>
    );
}
