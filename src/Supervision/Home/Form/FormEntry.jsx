import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
    IconButton,
    withStyles
} from '@material-ui/core';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@material-ui/core';
import {Add} from '@material-ui/icons';
import {Formik, Form} from 'formik';
import {RenderField} from './RenderField';
import {
    getTypeField,
    getLeftFields,
    getRightFields,
    commentsField
} from '../Home.configs';
import {saveData} from './FormEntry.request';

const styles = () => ({
    iconButton: {
        background: '#fff',
        '&:hover': {
            background: '#fff'
        }
    },
    form: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    fields: {
        display: 'flex',
        flexDirection: 'column'
    },
    fieldset: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    dialogTitle: {
        borderBottom: '1px solid #e0e6ea'
    },
    dialogActions: {
        borderTop: '1px solid #e0e6ea',
        marginTop: '16px'
    }
});

const FormCmp = ({classes, token}) => {
    const [open, setOpen] = useState(false);
    const [typeField, setTypeField] = useState({});
    const [leftFields, setLeftFields] = useState([]);
    const [rightFields, setRightFields] = useState([]);

    useEffect(() => {
        const retrieveData = async () => {
            setTypeField(await getTypeField(token));
            setRightFields(await getRightFields());
            setLeftFields(await getLeftFields(token));
        };

        retrieveData();
    });

    const handleOpenForm = () => setOpen(true);
    const handleCloseForm = () => setOpen(false);

    const initialValues = {
        type: '',
        resource: '',
        wilaya: '',
        commune: '',
        fullName: '',
        phone: '',
        comment: ''
    };

    return (
        <>
            <IconButton classes={{root: classes.iconButton}} color="primary" onClick={handleOpenForm}>
                <Add fontSize="large"/>
            </IconButton>

            <Dialog open={open} onClose={handleCloseForm} aria-labelledby="form-dialog-title">
                <Formik
                    initialValues={initialValues}
                    onSubmit={values => {
                        saveData(values, token).then(() => setOpen(false));
                    }}
                    validate={values => {
                        const errors = {};

                        if (!(values.type &&
                            values.resource &&
                            values.wilaya &&
                            values.commune &&
                            values.fullName &&
                            values.phone)) {
                            errors.missingRequiredFields = true;
                        }

                        return errors;
                    }}
                >
                    {({handleSubmit, errors, dirty}) => (
                        <>
                            <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
                                Formulaire
                            </DialogTitle>
                            <DialogContent>
                                <Form className={classes.form}>
                                    <RenderField {...typeField}/>

                                    <div className={classes.fieldset}>
                                        <div className={classes.fields}>
                                            {leftFields.map(field => <RenderField key={field.name} {...field}/>)}
                                        </div>
                                        <div className={classes.fields}>
                                            {rightFields.map(field => <RenderField key={field.name} {...field}/>)}
                                        </div>
                                    </div>

                                    <RenderField {...commentsField}/>
                                </Form>
                            </DialogContent>
                            <DialogActions className={classes.dialogActions}>
                                <Button disabled={!dirty || (dirty && errors.missingRequiredFields)}
                                        onClick={handleSubmit} color="primary">
                                    Envoyer
                                </Button>
                            </DialogActions>
                        </>
                    )}
                </Formik>
            </Dialog>
        </>
    );
};

FormCmp.propTypes = {
    classes: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired
};

export const FormEntry = withStyles(styles)(FormCmp);
