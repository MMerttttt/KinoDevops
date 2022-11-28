import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { SmallNavigation } from './SmallNavigation';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


export function TournamentInformation() {


    useEffect(() => {
        const dataA = window.localStorage.getItem('A');
        if(dataA !== null){
            setADisabled(true);   
        }
        const dataB = window.localStorage.getItem('B');
        if(dataB !== null){
            setBDisabled(true);   
        }
        const dataC = window.localStorage.getItem('C');
        if(dataC !== null){
            setCDisabled(true);   
        }
        const dataD = window.localStorage.getItem('D');
        if(dataD !== null){
            setDDisabled(true);   
        }
        const dataE = window.localStorage.getItem('E');
        if(dataE !== null){
            setEDisabled(true);   
        }
        const dataF = window.localStorage.getItem('F');
        if(dataF !== null){
            setFDisabled(true);   
        }
    }, []);
   
    const buchen = () => {
        if(a === "green"){
            window.localStorage.setItem('A', JSON.stringify("gebucht"));
        }  
        if(b === "green"){
            window.localStorage.setItem('B', JSON.stringify("gebucht"));
        }  
        if(c === "green"){
            window.localStorage.setItem('C', JSON.stringify("gebucht"));
        }    
        if(d === "green"){
            window.localStorage.setItem('D', JSON.stringify("gebucht"));
        }  
        if(e === "green"){
            window.localStorage.setItem('E', JSON.stringify("gebucht"));
        }  
        if(f === "green"){
            window.localStorage.setItem('F', JSON.stringify("gebucht"));
        }  
        
        if(a === "green" || b === "green" || c === "green" || d === "green" || e === "green" || f === "green"){
            alert('Buchung erfolgreich');
            window.location.reload(true);
        } 
    }



    const [aDisabled, setADisabled] = useState(false);
    let [a, setA] = useState("white");
    const setASeat = () => {
        if(a === "white"){
            setA("green");
        }
        else{
            setA("white");
        }

    }

    const [bDisabled, setBDisabled] = useState(false);
    let [b, setB] = useState("white");
    const setBSeat = () => {
        if(b === "white"){
            setB("green");
        }
        else{
            setB("white");
        }

    }

    const [cDisabled, setCDisabled] = useState(false);
    let [c, setC] = useState("white");
    const setCSeat = () => {
        if(c === "white"){
            setC("green");
        }
        else{
            setC("white");
        }

    }

    const [dDisabled, setDDisabled] = useState(false);
    let [d, setD] = useState("white");
    const setDSeat = () => {
        if(d === "white"){
            setD("green");
        }
        else{
            setD("white");
        }

    }

    const [eDisabled, setEDisabled] = useState(false);
    let [e, setE] = useState("white");
    const setESeat = () => {
        if(e === "white"){
            setE("green");
        }
        else{
            setE("white");
        }

    }

    const [fDisabled, setFDisabled] = useState(false);
    let [f, setF] = useState("white");
    const setFSeat = () => {
        if(f === "white"){
            setF("green");
        }
        else{
            setF("white");
        }

    }


    return (
        <>
            <Container fluid style={{ width: 1152, marginLeft: '20%', marginRight: '20%', marginTop: '2%', color: 'white', marginBottom: '2%' ,backgroundColor: 'rgba(0, 0, 0, 0.5)', paddingBottom: '2%'}}>
            <SmallNavigation name='Buchen' previousView='/'></SmallNavigation>
                <div style={{ marginTop: '5%', marginBottom: '10%' }} >
                    <h1 style={{ textAlign: 'center', marginBottom: '3%' }}>Leinwand</h1>

                    <div style={{marginTop: '1%', textAlign: 'center' }}>
                        <button disabled={aDisabled} style={{padding: "1% " , borderRadius: '100px', marginLeft: '1%', width: '5%', backgroundColor: a}} className='button' onClick={() => setASeat()}>A</button>
                        <button disabled={bDisabled} style={{padding: "1% " , borderRadius: '100px', marginLeft: '1%', width: '5%', backgroundColor: b}} className='button' onClick={() => setBSeat()}>B</button>
                        <button disabled={cDisabled} style={{padding: "1% " , borderRadius: '100px', marginLeft: '1%', width: '5%', backgroundColor: c}} className='button' onClick={() => setCSeat()}>C</button>
                        
                    </div>
                    
                    <div style={{marginTop: '1%', textAlign: 'center' }}>
                        <button disabled={dDisabled} style={{padding: "1% " , borderRadius: '100px', marginLeft: '1%', width: '5%', backgroundColor: d}} className='button' onClick={() => setDSeat()}>D</button>
                        <button disabled={eDisabled} style={{padding: "1% " , borderRadius: '100px', marginLeft: '1%', width: '5%', backgroundColor: e}} className='button' onClick={() => setESeat()}>E</button>
                        <button disabled={fDisabled} style={{padding: "1% " , borderRadius: '100px', marginLeft: '1%', width: '5%', backgroundColor: f}} className='button' onClick={() => setFSeat()}>F</button>
                    </div>
                </div>

                <Row style={{ marginTop: '2%', width: '100%', marginBottom: '2%' }}>
                    <Col style={{ marginLeft: '10%', marginRight: '10%', width: '25%' }}>
                        <Button onClick={buchen}>Buchen</Button>                                                
                    </Col>

                    {/* <Col style={{ marginLeft: '50%', marginRight: '10%', width: '25%' }}>
                    <Button >
                            <Link className='noUnderline' to='/create-player/Home'>Buchen</Link>
                    </Button>                                                
                    </Col> */}

                    
                </Row>
            </Container>
        </>
    );
}
