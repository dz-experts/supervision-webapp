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

const styles = () => ({
    iconButton: {
        background: '#fff',
        '&:hover': {
            background: '#fff'
        }
    }
});

const FormCmp = ({classes}) => {
    const [open, setOpen] = useState(false);
    const handleOpenForm = () => setOpen(true);
    const handleCloseForm = () => setOpen(false);

    return (
        <>
            <IconButton classes={{root: classes.iconButton}} color="primary" onClick={handleOpenForm}>
                <Add fontSize="large"/>
            </IconButton>

            <Dialog open={open} onClose={handleCloseForm} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Formulaire
                </DialogTitle>
                <DialogContent>
                    ...
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseForm} color="primary">
                        Envoyer
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

FormCmp.propTypes = {
    classes: PropTypes.object.isRequired
};

export const Form = withStyles(styles)(FormCmp);
