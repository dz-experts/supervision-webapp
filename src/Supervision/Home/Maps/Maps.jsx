import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles
} from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import {googleMapsConfigs} from './Maps.configs';
import {
    Home
} from '@material-ui/icons';
import {useSupervisionContext} from '../../Supervision.context';

const styles = () => ({
    googleMaps: {
        width: '100%', height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0
    }
});

const MapsCmp = ({classes}) => {
    const {mapsConfigs: {center, zoom}} = useSupervisionContext();
    const {defaultCenter, defaultZoom, defaultOptions, key} = googleMapsConfigs;

    return (
        <div className={classes.googleMaps}>
            <GoogleMapReact
                bootstrapURLKeys={key}
                center={center}
                zoom={zoom}
                defaultCenter={defaultCenter}
                defaultZoom={defaultZoom}
                options={defaultOptions}
                // TODO: remove workaround for issue: https://github.com/google-map-react/google-map-react/issues/677
                distanceToMouse={() => {}}
            >
                <Home lat={'35.39'} lng={'4.49'} color={'primary'}/>
            </GoogleMapReact>
        </div>
    );
};

MapsCmp.propTypes = {
    classes: PropTypes.object.isRequired
};

export const Maps = withStyles(styles)(MapsCmp);
