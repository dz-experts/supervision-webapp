import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles,
    Container,
    IconButton
} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import Background from '../../asserts/images/covid-map.jpg';
import {Selectors} from './Selectors';
import {Widget} from './Widget';
import {Form} from './Form';
import {Logout} from './Logout';
import {Maps} from './Maps';

const styles = () => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
        width: '100%',
        maxWidth: '100%',
        backgroundImage: `url(${Background})`,
        padding: '24px'
    },
    topContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    bottomContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    iconButton: {
        background: '#fff',
        '&:hover': {
            background: '#fff'
        }
    }
});

export const HomeCmp = ({classes}) => (
    <Container className={classes.container} component="main" maxWidth="xs">
        <Maps/>

        <div className={classes.topContainer}>
            <Widget/>

            <div>
                <Selectors/>
                <Logout/>
            </div>
        </div>

        <div className={classes.bottomContainer}>
            <IconButton classes={{root: classes.iconButton}} color="primary">
                <Menu/>
            </IconButton>

            <Form/>
        </div>
    </Container>
);

HomeCmp.propTypes = {
    classes: PropTypes.object.isRequired
};

export const Home = withStyles(styles)(HomeCmp);
