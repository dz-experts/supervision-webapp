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
import {Formik, Form, Field, ErrorMessage} from 'formik';
import Background from '../../asserts/images/bg-01.jpg';
import {useSupervisionContext} from '../Supervision.context';
import api from '../../Api';

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
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
});

const LoginCmp = ({classes}) => {
    const history = useHistory();
    const {setToken} = useSupervisionContext();

    const handleLogin = async ({username, password}) => {
        console.log(username, password);

        const response = await api.post('api/auth/login/', {
            username: username,
            password: password
        });

        if (response.status === 200) {
            setToken(response.data.token);
            history.push('/home');
        }
    };

    return (
        <Container className={classes.container} component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Fight COVID-19
                </Typography>

                <Formik
                    initialValues={{username: '', password: ''}}
                    onSubmit={values => {
                        handleLogin(values);
                    }}
                >
                    {() => (
                        <Form>
                            <Field type="text" name="username">
                                {({field}) => (
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Username"
                                        autoFocus
                                        {...field}
                                    />
                                )}
                            </Field>
                            <ErrorMessage name="username" component="div"/>
                            <Field type="password" name="password">
                                {({field}) => (
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Password"
                                        id="password"
                                        type="password"
                                        autoComplete="current-password"
                                        {...field}
                                    />
                                )}
                            </Field>
                            <ErrorMessage name="password" component="div"/>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Login
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
    );
};

LoginCmp.propTypes = {
    classes: PropTypes.object.isRequired
};

export const Login = withStyles(styles)(LoginCmp);
