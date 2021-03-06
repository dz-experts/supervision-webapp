import React, {useState} from 'react';
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
    getLeftFields,
    getRightFields,
    commentsField
} from '../Home.configs';
import {saveData} from './FormEntry.request';
import {useSupervisionContext} from '../../Supervision.context';
import {retrieveEntries} from '../Maps/Maps.request';

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
    },
    selectorItem: {
        display: 'flex',
        minWidth: '200px',
        margin: '16px 0 8px 0'
    }
});

const FormCmp = ({classes}) => {
    const {token, data, setEntries} = useSupervisionContext();
    const [open, setOpen] = useState(false);

    const typeField = data.types;
    const rightFields = getRightFields(data);
    const leftFields = getLeftFields(data);

    const handleOpenForm = () => setOpen(true);
    const handleCloseForm = () => setOpen(false);

    const initialValues = {
        type: '',
        resource: '',
        wilaya: '',
        commune: '',
        fullName: '',
        phone: '',
        comment: '',
        quantity: ''
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
                        saveData(values, token).then(async () => {
                            setEntries(await retrieveEntries(token));
                            setOpen(false);
                        });
                    }}
                    validate={values => {
                        const errors = {};

                        if (!(values.type &&
                            values.resource &&
                            values.wilaya &&
                            values.commune &&
                            values.fullName &&
                            values.quantity &&
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
                                    <RenderField
                                        classes={{selectorItem: classes.selectorItem}}
                                        {...typeField}
                                    />

                                    <div className={classes.fieldset}>
                                        <div className={classes.fields}>
                                            {leftFields.map(field => <RenderField
                                                    classes={{selectorItem: classes.selectorItem}}
                                                    key={field.name}
                                                    {...field}
                                                />
                                            )}
                                        </div>
                                        <div className={classes.fields}>
                                            {rightFields.map(field => <RenderField
                                                    classes={{selectorItem: classes.selectorItem}}
                                                    key={field.name}
                                                    {...field}
                                                />
                                            )}
                                        </div>
                                    </div>

                                    <RenderField
                                        classes={{selectorItem: classes.selectorItem}}
                                        {...commentsField}
                                    />
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
    classes: PropTypes.object.isRequired
};

export const FormEntry = withStyles(styles)(FormCmp);
