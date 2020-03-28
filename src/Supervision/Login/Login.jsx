import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {
    withStyles,
    Container,
    TextField,
    Button,
    Typography
} from '@material-ui/core';
import Background from '../../asserts/images/bg-01.jpg';

const styles = theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        maxWidth: '100%',
        backgroundImage: `url(${Background})`
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#ffffffbd',
        borderRadius: '4px',
        padding: '16px'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
});

const LoginCmp = ({classes}) => {
    const history = useHistory();

    return (
        <Container className={classes.container} component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Fight COVID-19
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => history.push('/home')}
                        className={classes.submit}
                    >
                        Login
                    </Button>
                </form>
            </div>
        </Container>
    );
};

LoginCmp.propTypes = {
    classes: PropTypes.object.isRequired
};

export const Login = withStyles(styles)(LoginCmp);
