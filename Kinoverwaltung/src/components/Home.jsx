import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';


export function Home() {

const fromThis = "Home";

function clear(){
    window.localStorage.clear();
}

    return (
        <>
            <body>
                <Container fluid style={{ width: 1152, marginLeft: '20%', marginRight: '20%', marginTop: '5%' }}>

                    <h1 style={{ fontSize: 100, textAlign: 'center' }}>Homepage </h1>

                    <h2 style={{ fontSize: 45, textAlign: 'center' }}>Kinoverwaltung</h2>

                    <Row style={{ marginTop: '15%' }}>

                        <Col md style={{textAlign: 'center' }}>
                            <Badge pill bg='white' style={{ width: 300, height: 50}}>
                                <Button variant='white' >
                                    <Link className='noUnderline' to='/tournament-list' onClick={clear}>Programm</Link>
                                </Button>
                            </Badge>{' '}
                        </Col>

                    </Row>

                </Container>
            </body>

        </>
    );

}