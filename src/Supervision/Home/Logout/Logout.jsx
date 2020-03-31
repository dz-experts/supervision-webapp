import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {
    IconButton,
    withStyles
} from '@material-ui/core';
import {PowerSettingsNew} from '@material-ui/icons';
import {useSupervisionContext} from '../../Supervision.context';

const styles = () => ({
    iconButton: {
        background: '#fff',
        '&:hover': {
            background: '#fff'
        }
    }
});

const LogoutCmp = ({classes}) => {
    const history = useHistory();
    const {setToken} = useSupervisionContext();

    const handleLogout = () => {
        setToken('');
        history.push('/');
    };

    return (
        <IconButton classes={{root: classes.iconButton}} color="secondary" onClick={() => handleLogout()}>
            <PowerSettingsNew/>
        </IconButton>
    );
};

LogoutCmp.propTypes = {
    classes: PropTypes.object.isRequired
};

export const Logout = withStyles(styles)(LogoutCmp);
