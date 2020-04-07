import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
    withStyles,
    Container,
    IconButton,
    CircularProgress
} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import Background from '../../asserts/images/covid-map.jpg';
import {Selectors} from './Selectors';
import {Widget} from './Widget';
import {FormEntry} from './Form';
import {Logout} from './Logout';
import {Maps} from './Maps';
import {useSupervisionContext} from '../Supervision.context';
import {
    getCommunesField,
    getResourceField,
    getTypeField,
    getWilayaField
} from './Home.configs';

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
    },
    topRightContainer: {
        display: 'flex',
        alignItems: 'flex-start'
    },
    loading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        maxWidth: '100%',
        background: '#9e9ea2bf'
    }
});

export const HomeCmp = ({classes}) => {
    const {token, data, setData} = useSupervisionContext();

    useEffect(() => {
        const retrieveData = async () => {
            setData({
                loading: false,
                types: await getTypeField(token),
                resources: await getResourceField(token),
                wilayas: await getWilayaField(),
                communes: await getCommunesField()
            });
        };

        retrieveData();
    }, token);

    if (data.loading) {
        return (
            <div className={classes.loading}>
                <CircularProgress/>
            </div>
        );
    }

    return (
        <Container className={classes.container} component="main" maxWidth="xs">
            <Maps/>

            <div className={classes.topContainer}>
                <Widget/>

                <div className={classes.topRightContainer}>
                    <Selectors/>
                    <Logout/>
                </div>
            </div>

            <div className={classes.bottomContainer}>
                <IconButton classes={{root: classes.iconButton}} color="primary">
                    <Menu/>
                </IconButton>

                <FormEntry token={token}/>
            </div>
        </Container>
    );
};

HomeCmp.propTypes = {
    classes: PropTypes.object.isRequired
};

export const Home = withStyles(styles)(HomeCmp);
