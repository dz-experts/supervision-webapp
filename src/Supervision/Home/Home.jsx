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

const styles = () => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
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
        <section className={classes.topContainer}>
            <Widget/>

            <div>
                <Selectors/>
                <Logout/>
            </div>
        </section>

        <section className={classes.bottomContainer}>
            <IconButton classes={{root: classes.iconButton}} color="primary">
                <Menu/>
            </IconButton>

            <Form/>
        </section>
    </Container>
);

HomeCmp.propTypes = {
    classes: PropTypes.object.isRequired
};

export const Home = withStyles(styles)(HomeCmp);
