import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles
} from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import {googleMapsConfigs} from './Maps.configs';

const styles = () => ({
    googleMaps: {
        width: '100%', height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0
    }
});

const MapsCmp = ({classes}) => {
    const {defaultCenter, defaultZoom, defaultOptions, key} = googleMapsConfigs;

    return (
        <div className={classes.googleMaps}>
            <GoogleMapReact
                bootstrapURLKeys={key}
                defaultCenter={defaultCenter}
                defaultZoom={defaultZoom}
                options={defaultOptions}
            />
        </div>
    );
};

MapsCmp.propTypes = {
    classes: PropTypes.object.isRequired
};

export const Maps = withStyles(styles)(MapsCmp);
