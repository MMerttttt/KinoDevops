import React from 'react';
import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useState, useEffect } from 'react';
import { SmallNavigation } from './SmallNavigation';


export function TournamentList() {

    const filme = [
        { Filmname: "Creed",Datum: "25.11.2022", Start: "18:00", Ende: "19:30" }        
      ];

    const columns = [
        {
            dataField: 'Filmname',
            text: 'Film',
            sort: true
        },
        {
            dataField: 'Datum',
            text: 'Datum',
            sort: true
        },
        {
            dataField: 'Start',
            text: 'Startzeit',
            sort: true
        },
        {
            dataField: 'Ende',
            text: 'Endzeit',
            sort: true
        },
        
        {
            dataField: 'Id',
            text: 'Detail',
            formatter: detailButton,
            sort: true
        }
    ];
    

    function detailButton(cell) {
        return (
            <Button style={{ width: '100%', color: 'white' }}>
                <Link style={{ textDecoration: 'none', color: 'white' }} to={'/tournament-information'}>Details</Link>
            </Button>
        );
    };

    function ShortDateTime(cell) {
        return (
            cell.slice(0, -9)
        );
    };

    return <>
        <Container fluid style={{ width: 1152, marginLeft: '20%', marginRight: '20%', marginTop: '5%',backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <SmallNavigation name='Programm' previousView='/'></SmallNavigation>
            <BootstrapTable
                bootstrap4
                keyField='id'
                headerClasses='tableHeader'
                rowStyle={{ color: 'white', backgroundColor: 'grey' }}
                data={filme}
                columns={columns}
                pagination={paginationFactory({ sizePerPage: 10, sizePerPageList: [{ text: '5', value: 5 }, { text: '10', value: 10 }] })}
            />
        </Container>
    </>
}