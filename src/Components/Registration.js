import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Row, Col } from 'react-bootstrap';

export default class Register extends React.Component {
    render() {
        return(
            <React.Fragment>
                 <Container>
                        <Row>
                            <Col sm={12}>
                                <Form style={{ margin: '0px auto', backgroundColor: 'white' }}>
                                    <div style={{ backgroundColor: '#3D464D', padding: '15px' }}><h4 style={{ color: 'white', marginLeft: '60px' }}>Registration Form</h4></div>
                                    <Form.Text style={{ margin: '10px 35px' }} className="text-muted">
                                        Tell us about your requirements. Our concerned executive will get in touch with you with a list of services that best fit your requirements
                                    </Form.Text>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Control style={{ backgroundColor: '#E6E7E9', width: '80%', margin: '10px 30px' }} name="fullName" type="text" placeholder="Enter Full Name" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control style={{ backgroundColor: '#E6E7E9', width: '80%', margin: '10px 30px' }} name="email"  type="email" placeholder="Enter Email" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicContact">
                                        <Form.Control style={{ backgroundColor: '#E6E7E9', width: '80%', margin: '10px 30px' }} name="contact"  type="number" placeholder="Mobile No" />
                                    </Form.Group>

                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control style={{ backgroundColor: '#E6E7E9', width: '80%', margin: '10px 30px' }} name="category" as="select">
                                            <option>Event Type</option>
                                            <option>Wedding</option>
                                            <option>Baby & Kids</option>
                                            <option>Fashion & Portfolio</option>
                                            <option>Special Occasion</option>
                                            <option>Travel</option>
                                            <option>Nature</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">

                                        <form noValidate>
                                            <TextField style={{ margin: '10px 30px' }}
                                                id="date"
                                                name="date"
                                                label="Event Date"
                                                type="date"
                                                defaultValue="2017-05-24"
                                               

                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </form>
                                    </Form.Group>
                                    <Form.Group
                                        style={{
                                            backgroundColor: '#E6E7E9 !important',
                                            width: '80%',
                                            margin: '10px 30px'
                                        }}
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Control
                                            name="message"
                                            placeholder="Message (optional)"
                                            as="textarea"
                                            rows="3"
                                        />
                                    </Form.Group>
                                   
                                    <div style={{ backgroundColor: '#3D464D', padding: '10px' }}>
                                        <Button
                                            style={{
                                                backgroundColor: '#f9735a',
                                                borderColor: 'transparent',
                                                borderRadius: '0',
                                                width: '100%'
                                            }} variant="primary" type="submit"
                                        >
                                            Submit
                                        </Button>
                                    </div>
                                </Form>

                            </Col>
                        </Row>
                    </Container>
            </React.Fragment>
        )
    }
}