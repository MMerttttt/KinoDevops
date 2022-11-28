import React from 'react';
import { SmallNavigation } from './SmallNavigation';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Breadcrumb,Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';




export function CreatePlayer(props) {


    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const [selected, setSelected] = useState({});

    const handleGenderChange = event => {
        setSelected(event.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();

       
    }


    function absenden(){
        if(inputs.firstname !== undefined && inputs.name !== undefined && inputs.email !== undefined && inputs.birthdate !== undefined && inputs.number !== undefined){
            alert("Wir haben dir gerade eine Mail und eine Nachricht gesendet. Bestätige diese bitte! Wenn alles funktioniert, wird Ihnen eine bestätigungsmail für die Buchung gesendet.");
        }
        
    }
    

    return (
        <body>
            <Container fluid style={{ width: 1152, marginLeft: '20%', marginRight: '20%', marginTop: '5%', backgroundColor: 'rgba(0, 0, 0, 0.5)', paddingBottom: '2%'}}> {/*fluid für ganz expanden*/}
                <SmallNavigation name='Persönliche Informationen' previousView='/'></SmallNavigation>


                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md>
                            <Form.Group controlId='formFirstname'>
                                <Form.Label>Firstname*</Form.Label>
                                <Form.Control name='firstname' required type='text' placeholder='Max' onChange={handleChange} />
                            </Form.Group>
                        </Col>

                        <Col md>
                            <Form.Group controlId='formName'>
                                <Form.Label>Name*</Form.Label>
                                <Form.Control name='name' required type='text' placeholder='Mustermann' onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '3%' }}>
                        <Col md>
                            <Form.Group controlId='formEmail'>
                                <Form.Label>Email Adress*</Form.Label>
                                <Form.Control name='email' required type='email' placeholder='Example@email.com' onChange={handleChange} />
                            </Form.Group>
                        </Col>

                        <Col md>
                            <Form.Group controlId='formBirthdate'>
                                <Form.Label>Birthdate*</Form.Label>
                                <Form.Control name='birthdate' required type='date' onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '3%' }}>
                        <Col md>
                            <Form.Group controlId='formPhonenumber'>
                                <Form.Label>Phone number*</Form.Label>
                                <Form.Control name='number' required type='text' maxLength='12' placeholder='+41XXXXXXXXX' onChange={handleChange} />
                                <Form.Text style={{ color: 'white' }}>
                                    * are must fields
                                </Form.Text>
                            </Form.Group>
                        </Col>

                        <Col md>
                            <Form.Group controlId='formSex'>
                                <Form.Label>Sex</Form.Label><br />
                                <Form.Check
                                    inline
                                    required
                                    value='1'
                                    checked={selected === '1'}
                                    onChange={handleGenderChange}
                                    label='Male'
                                    type='radio'
                                />


                                <Form.Check
                                    inline
                                    value='2'
                                    checked={selected === '2'}
                                    onChange={handleGenderChange}
                                    label='Female'
                                    type='radio'
                                />
                                <Form.Check
                                    inline
                                    value='3'
                                    checked={selected === '3'}
                                    onChange={handleGenderChange}
                                    label='Other'
                                    type='radio'
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={10} />
                        <Col md>
                            <Button type='submit' style={{ marginTop: '3%', float: 'right' }} onClick={absenden}>absenden</Button>
                        </Col>
                    </Row>

                </Form>

            </Container>


        </body>
    );

}