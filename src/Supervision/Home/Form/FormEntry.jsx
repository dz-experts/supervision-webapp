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

const typeOptions = [
    {
        id: '1',
        value: 'Information',
        displayValue: 'Information'
    },
    {
        id: '2',
        value: 'Need',
        displayValue: 'Need'
    },
    {
        id: '3',
        value: 'Extra',
        displayValue: 'Extra'
    },
    {
        id: '4',
        value: 'Work on progress',
        displayValue: 'Work on progress'
    }
];

const selectTypeField = {
    component: 'selector',
    name: 'type',
    label: 'Type',
    type: 'text',
    options: typeOptions,
    disabled: false
};
const leftFields = [
    {
        component: 'selector',
        name: 'wilaya',
        label: 'Wilaya',
        type: 'text',
        options: typeOptions,
        disabled: false
    },
    {
        component: 'selector',
        name: 'resource',
        label: 'Resource',
        type: 'text',
        options: typeOptions,
        disabled: false
    },
    {
        component: 'input',
        name: 'fullName',
        label: 'Nom',
        type: 'text',
        options: typeOptions,
        disabled: false
    }
];
const rightFields = [
    {
        component: 'selector',
        name: 'commune',
        label: 'Commune',
        type: 'text',
        options: typeOptions,
        disabled: false
    },
    {
        component: 'input',
        name: 'quantity',
        label: 'Quantity',
        type: 'number',
        options: typeOptions,
        disabled: false
    },
    {
        component: 'input',
        name: 'phone',
        label: 'Phone',
        type: 'text',
        options: typeOptions,
        disabled: false
    }
];
const commentsField = {
    component: 'textArea',
    name: 'comments',
    label: 'Comments',
    disabled: false
};

const FormCmp = ({classes}) => {
    const [open, setOpen] = useState(false);
    const handleOpenForm = () => setOpen(true);
    const handleCloseForm = () => setOpen(false);
    const initialValues = {
        type: '',
        wilaya: ''
    };

    const addEntry = values => {
        console.log(values);
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
                        console.log(values);
                        addEntry(values);
                    }}
                >
                    {({handleSubmit}) => (
                        <>
                            <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
                                Formulaire
                            </DialogTitle>
                            <DialogContent>
                                <Form className={classes.form}>
                                    <RenderField {...selectTypeField}/>

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
                                <Button onClick={handleSubmit} color="primary">
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
