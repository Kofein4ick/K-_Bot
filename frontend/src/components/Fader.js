import React, { useState, useEffect } from 'react'
import {Image} from 'react-bootstrap';
import { CHAT_ROUTE} from '../utils/consts';
import PropTypes from 'prop-types'
import '../App.css'
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Fader = ({ time, src }) => {

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-out',
    });

    useEffect(() => {
        const timeout = setInterval(() => {
                setFadeProp({
                    fade: 'fade-in'
                })
        }, 1000);

        return () => clearInterval(timeout)
    }, [fadeProp])

    return (
       <Grid container direction={"column"} alignItems={"flex-start"} className="d-flex align-items-center">
            <Image style={{width:'80vh',height:'80vh'}} className={fadeProp.fade} src={src}></Image>
            <Link to={CHAT_ROUTE}>
            <button style={{ width:'30vh',fontSize:'120%' ,backgroundColor:'RoyalBlue'
            ,borderColor:'RoyalBlue',color:'white',borderRadius:10}} className={fadeProp.fade}>Начать</button>
            </Link>
        </Grid>
    )
}

Fader.defaultProps = {
    src:''
}

Fader.propTypes = {
    text: PropTypes.string,
}

export default Fader