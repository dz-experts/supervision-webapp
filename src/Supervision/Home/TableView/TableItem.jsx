import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles,
    ExpansionPanel,
    ExpansionPanelSummary,
    Typography,
    ExpansionPanelDetails
} from '@material-ui/core';
import {ExpandMore} from '@material-ui/icons';

const styles = () => ({
    tableItem: {
        width: '100%',
        marginBottom: '8px'
    },
    panelDetails: {
        display: 'flex',
        flexDirection: 'column'
    }
});

const TableItemCmp = ({classes, entry}) => {
    const {id, type, resource, phone, quantity, full_name: fullName, commune, wilaya, comment} = entry;
    return (
        <ExpansionPanel className={classes.tableItem}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMore/>}
                id={`panel-id-${id}`}
            >
                <Typography>{type.name} | {resource.name}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.panelDetails}>
                <Typography>Full Name: {fullName}</Typography>
                <Typography>Phone: {phone}</Typography>
                <Typography>Quantity: {quantity}</Typography>
                <Typography>Wilaya: {wilaya}</Typography>
                <Typography>Commune: {commune.name}</Typography>
                <Typography>Comment: {comment}</Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

TableItemCmp.propTypes = {
    classes: PropTypes.object.isRequired,
    entry: PropTypes.object.isRequired
};

export const TableItem = withStyles(styles)(TableItemCmp);
