import React from 'react';
import PropTypes from 'prop-types';
import {
    IconButton,
    withStyles
} from '@material-ui/core';
import {Close} from '@material-ui/icons';
import {useSupervisionContext} from '../../Supervision.context';
import {TableItem} from './TableItem';

const styles = () => ({
    tableView: {
        display: 'flex',
        width: '40%',
        padding: '16px',
        height: '96vh',
        overflow: 'scroll',
        zIndex: 1,
        background: '#c5bfbc',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    iconButton: {
        background: '#fff',
        '&:hover': {
            background: '#fff'
        }
    },
    listItems: {
        width: '100%',
        marginTop: '24px'
    }
});

const TableViewCmp = ({classes}) => {
    const {setTwoLayout, entries} = useSupervisionContext();

    return (
        <div className={classes.tableView}>
            <div>
                <IconButton
                    classes={{root: classes.iconButton}}
                    color="primary"
                    onClick={() => setTwoLayout(false)}>
                    <Close/>
                </IconButton>
            </div>

            <div className={classes.listItems}>
                {
                    entries.map(entry => <TableItem key={entry.id} entry={entry}/>)
                }
            </div>
        </div>
    );
};

TableViewCmp.propTypes = {
    classes: PropTypes.object.isRequired
};

export const TableView = withStyles(styles)(TableViewCmp);
