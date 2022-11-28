import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function SmallNavigation(props) {
    const navigate = useNavigate();
    return (
        <div style={{ width: '100%', height: '100px' }}>
            <div style={{ display: 'block', width: '5%', float: 'left' }}>
                <button style={{ backgroundColor: 'transparent', border: 'none' }} onClick={() => navigate(-1)}>
                    <img src={require('../images/back_arrow.png')} alt='back arrow' />
                </button>
            </div>


            <div style={{ textAlign: 'center', width: '90%', display: 'block', float: 'left', fontSize: '45px', fontWeight: 'bold' }}>{props.name}</div>

            <div style={{ display: 'block', width: '5%', float: 'left' }}>
                <Link to='/' style={{ float: 'right' }}>
                    <img src={require('../images/home.png')} alt='home' />
                </Link>
            </div>

        </div>

    )
}